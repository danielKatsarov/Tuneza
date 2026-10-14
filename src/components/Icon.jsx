const PATHS = {
  guitar: <><path d="M42 8l14 14-5 5-6-6-14 14" /><circle cx="22" cy="42" r="12" /><circle cx="22" cy="42" r="3" /></>,
  keys: <><rect x="6" y="18" width="52" height="28" rx="4" /><path d="M19 18v28M32 18v28M45 18v28" /><rect x="15" y="18" width="8" height="14" fill="currentColor" /><rect x="41" y="18" width="8" height="14" fill="currentColor" /></>,
  drum: <><ellipse cx="32" cy="24" rx="20" ry="7" /><path d="M12 24v20c0 4 9 7 20 7s20-3 20-7V24M24 8l8 14M44 6l-10 16" /></>,
  amp: <><rect x="8" y="14" width="48" height="38" rx="5" /><circle cx="24" cy="36" r="9" /><circle cx="42" cy="26" r="2.5" /><circle cx="50" cy="26" r="2.5" /><path d="M40 40h12" /></>,
  mic: <><rect x="25" y="8" width="14" height="26" rx="7" /><path d="M16 28c0 10 7 16 16 16s16-6 16-16M32 44v10M23 55h18" /></>,
  headphones: <><path d="M12 40V32a20 20 0 0140 0v8" /><rect x="8" y="38" width="10" height="16" rx="4" /><rect x="46" y="38" width="10" height="16" rx="4" /></>,
};

export default function Icon({ name, size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor"
         strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}