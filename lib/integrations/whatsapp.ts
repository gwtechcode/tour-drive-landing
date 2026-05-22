type WhatsAppParams = {
  phone: string;
  message: string;
};

export function createWhatsAppUrl({ phone, message }: WhatsAppParams) {
  const normalizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
