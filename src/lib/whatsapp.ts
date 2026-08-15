const WHATSAPP_NUMBER = "15793001987";
const DEFAULT_MESSAGE = "Hola Lucio, quiero agendar una consulta.";

export const WHATSAPP_DISPLAY_NUMBER = "+1 579 300 1987";

export function buildWhatsAppLink(message?: string): string {
  const text = message ?? DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
