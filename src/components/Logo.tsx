import Image from "next/image";

type LogoProps = {
  href?: string;
  tone?: "light" | "dark";
};

export function Logo({ href = "/", tone = "dark" }: LogoProps) {
  return (
    <a
      className={`logo logo-mark logo-${tone}`}
      href={href}
      aria-label="Vet356 ana sayfa"
    >
      <Image
        src="/images/vet356-logo.png"
        alt="Vet356 Veteriner Kliniği"
        width={220}
        height={72}
        className="logo-image"
        priority
      />
    </a>
  );
}
