// Cloudflare Pages Function — POST /api/contacto
// Requiere el secret RESEND_API_KEY configurado en el proyecto de Cloudflare Pages.
const DESTINATARIO = 'info@solutum.com.uy'
// ponytail: remitente de prueba de Resend (no requiere dominio verificado).
// Cambiar a algo@solutum.com.uy cuando el dominio esté verificado en Resend.
const REMITENTE = 'SOLUTUM <onboarding@resend.dev>'

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export async function onRequestPost({ request, env }) {
  let datos
  try {
    datos = await request.json()
  } catch {
    return Response.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const { nombre, email, telefono, tipo, mensaje } = datos
  if (!nombre || !email || !tipo || !mensaje) {
    return Response.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  const html = `
    <h2>Nueva consulta desde solutum.com.uy</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(telefono || '-')}</p>
    <p><strong>Tipo de obra:</strong> ${escapeHtml(tipo)}</p>
    <p><strong>Mensaje:</strong><br>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
  `

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: REMITENTE,
      to: [DESTINATARIO],
      reply_to: email,
      subject: `Nueva consulta de ${nombre} — ${tipo}`,
      html,
    }),
  })

  if (!resp.ok) {
    return Response.json({ error: 'No se pudo enviar el correo' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
