import Link from "next/link";

export function Monogram() {
  return (
    <svg className="brand-mark" viewBox="0 0 52 66" fill="none" aria-hidden="true">
        <path d="M5 8h14M32 8h14M10 8l17 46L42 8M16 8l12 34M22 19l14 39L49 19M18 19h10M41 19h10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8l17 46 3-8L16 8z" fill="currentColor" fillOpacity=".65" />
      </svg>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/#inicio" className={`brand${footer ? " brand--footer" : ""}`} aria-label="Valença Advogados — início">
      <Monogram />
      <span className="brand-wordmark">VALENÇA<span>ADVOGADOS</span></span>
    </Link>
  );
}
