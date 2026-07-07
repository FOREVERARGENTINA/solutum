import { z } from 'zod'

const contactoSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresá un email válido'),
  telefono: z.string().optional(),
  tipo: z.string().min(1, 'Seleccioná un tipo de obra'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

function mostrarError(campo, msg) {
  const el = document.getElementById(`error-${campo}`)
  if (el) { el.textContent = msg; el.hidden = false }
}

function limpiarErrores() {
  document.querySelectorAll('.form-error').forEach(el => {
    el.textContent = ''
    el.hidden = true
  })
}

export function initForms() {
  const form = document.getElementById('form-contacto')
  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    limpiarErrores()

    const datos = {
      nombre: form.nombre.value.trim(),
      email: form.email.value.trim(),
      telefono: form.telefono.value.trim(),
      tipo: form.tipo.value,
      mensaje: form.mensaje.value.trim(),
    }

    const resultado = contactoSchema.safeParse(datos)

    if (!resultado.success) {
      resultado.error.issues.forEach(issue => {
        const campo = issue.path[0]
        mostrarError(campo, issue.message)
      })
      return
    }

    const boton = form.querySelector('button[type="submit"]')
    boton.disabled = true

    try {
      const resp = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      })
      if (!resp.ok) throw new Error('Error al enviar')

      form.hidden = true
      const confirmacion = document.getElementById('form-confirmacion')
      if (confirmacion) confirmacion.hidden = false
    } catch {
      mostrarError('mensaje', 'No se pudo enviar la consulta. Intentá de nuevo o escribinos por WhatsApp.')
      boton.disabled = false
    }
  })
}
