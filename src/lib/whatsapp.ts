// TODO: Reemplazar por el número/enlace real de WhatsApp de Lucio Vasquez.
const WHATSAPP_NUMBER = "10000000000";
const DEFAULT_MESSAGE = "Hola Lucio, quiero agendar una consulta.";

export const WHATSAPP_DISPLAY_NUMBER = "+1 (000) 000-0000";

export function buildWhatsAppLink(message?: string): string {
  const text = message ?? DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
