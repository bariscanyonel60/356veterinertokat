export const PHONE_DISPLAY = "0535 524 99 60";
export const PHONE_E164 = "+905355249960";
export const PHONE_HREF = `tel:${PHONE_E164}`;
export const INSTAGRAM_URL = "https://www.instagram.com/vet356veteriner";
export const INSTAGRAM_HANDLE = "@vet356veteriner";
export const LOCATION_LABEL = "Tokat / Merkez";
export const SITE_URL = "https://vet356.com";
export const MEDIA_CREDIT_LABEL = "BCY DİJİTAL";
export const MEDIA_CREDIT_URL = "https://bariscanyonel.com";

function whatsappUrl(message: string) {
  return `https://wa.me/905355249960?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP = {
  appointment: whatsappUrl(
    "Merhaba Vet356, can dostum için randevu almak istiyorum. Türünü ve müsait olduğum günleri yazıyorum:",
  ),
  info: whatsappUrl(
    "Merhaba Vet356, can dostum hakkında bilgi almak istiyorum.",
  ),
  location: whatsappUrl(
    "Merhaba Vet356, kliniğe gelmeden önce yol tarifi alabilir miyim?",
  ),
} as const;
