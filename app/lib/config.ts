export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const whatsappNumber = "923004471303";

export const yearsActive = 15;
export const listingsCount = 500;
export const dealsCount = 300;

export const officeAddress = "H839+252, Mozang Chungi, Lahore, 54000, Pakistan";
export const phoneDisplay = "+92 300 4471303";

export function waLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:+${whatsappNumber}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  officeAddress
)}&output=embed`;
