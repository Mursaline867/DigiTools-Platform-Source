export function CartIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20" r="1" /><circle cx="19" cy="20" r="1" />
      <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20.2 7H6" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

export function ArrowIcon({ className = "h-4 w-4" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function MenuIcon({ className = "h-6 w-6" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function XIcon({ className = "h-5 w-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>;
}

export function StarIcon({ className = "h-5 w-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.8 2.75 5.58 6.16.9-4.46 4.34 1.05 6.14L12 16.87l-5.5 2.89 1.05-6.14L3.1 9.28l6.15-.9L12 2.8Z" /></svg>;
}

export function FacebookIcon({ className = "h-[18px] w-[18px]" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.6 21v-8h2.75l.41-3.13H13.6v-2c0-.91.26-1.53 1.58-1.53h1.69V3.55a22 22 0 0 0-2.46-.13c-2.44 0-4.11 1.46-4.11 4.14v2.31H7.54V13h2.76v8h3.3Z" /></svg>;
}

export function SocialInstagramIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialXIcon({ className = "h-4 w-4" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 3H22l-6.77 7.74L23.2 21h-6.24l-4.89-6.39L6.48 21H3.36l7.26-8.3L2.97 3h6.4l4.42 5.84L18.9 3Zm-1.1 16.2h1.72L8.43 4.7H6.58L17.8 19.2Z" /></svg>;
}
