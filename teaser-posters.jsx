/* Helion · Teaser de lançamento — posters Instagram
   Exporta window.TeaserPoster({ n, fmt }) — fmt: 'feed' (1080×1080) | 'story' (1080×1920) */

const TZ = {
  bg: '#06080A', bg1: '#0B0F12', bg2: '#11161A', panel: '#0E1316',
  line: '#1E262C', line2: '#2A343B',
  white: '#F3F6F4', ink2: '#9BA7AD', ink3: '#66727A',
  green: '#00C853', greenD: '#009C3B', greenL: '#1DE074',
  neon: '#D5FF3A', lilac: '#B49BF0', red: '#FF4D5E', orange: '#FF9F2E',
};
const SERIF = '"Instrument Serif", Georgia, serif';
const MONO = '"Geist Mono", ui-monospace, Menlo, monospace';

function HexMark({ size = 64, glow = 0.32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
      style={{ filter: glow ? `drop-shadow(0 0 ${size * 0.28}px rgba(213,255,58,${glow}))` : 'none', display: 'block' }}>
      <path d="M50 7 L84.5 27 L84.5 73 L50 93 L15.5 73 L15.5 27 Z" fill="none" stroke={TZ.white} strokeWidth="6" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="17.5" fill={TZ.green} />
      <circle cx="50" cy="50" r="17.5" fill="none" stroke={TZ.neon} strokeWidth="2.4" />
    </svg>
  );
}

function Wordmark({ markSize = 34, font = 30, color = TZ.white }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <HexMark size={markSize} glow={0.3} />
      <span style={{ fontWeight: 600, letterSpacing: '-0.03em', fontSize: font, color }}>helion</span>
    </div>
  );
}

function GridBG({ fade = '30% 30%' }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
      backgroundImage: `linear-gradient(${TZ.line}99 1px, transparent 1px), linear-gradient(90deg, ${TZ.line}99 1px, transparent 1px)`,
      backgroundSize: '64px 64px',
      WebkitMaskImage: `radial-gradient(ellipse 85% 70% at ${fade}, #000 18%, transparent 72%)`,
      maskImage: `radial-gradient(ellipse 85% 70% at ${fade}, #000 18%, transparent 72%)`,
    }} />
  );
}

function Aura({ style }) {
  return <div style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', filter: 'blur(70px)', ...style }} />;
}

function Eyebrow({ children, color = TZ.neon }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: MONO, fontSize: 22, letterSpacing: '0.14em', textTransform: 'uppercase', color,
    }}>
      <span style={{ width: 34, height: 1, background: color, display: 'inline-block' }} />
      {children}
    </span>
  );
}

/* ---- shared frame ---- */
function Frame({ fmt, children, fade }) {
  const story = fmt === 'story';
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      background: `radial-gradient(120% 90% at 50% -10%, ${TZ.bg1}, ${TZ.bg} 60%)`,
      color: TZ.white, fontFamily: '"Geist", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column',
      padding: story ? '96px 88px' : '76px 76px',
    }}>
      <GridBG fade={fade || (story ? '50% 22%' : '30% 28%')} />
      {children}
    </div>
  );
}

function TopBar({ n, fmt }) {
  return (
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Wordmark markSize={fmt === 'story' ? 40 : 34} font={fmt === 'story' ? 34 : 30} />
      <span style={{ fontFamily: MONO, fontSize: fmt === 'story' ? 24 : 21, color: TZ.ink3, letterSpacing: '0.1em' }}>
        {String(n).padStart(2, '0')} <span style={{ color: TZ.line2 }}>/ 05</span>
      </span>
    </div>
  );
}

function Footer({ fmt, cta = 'em breve' }) {
  const story = fmt === 'story';
  return (
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: story ? 28 : 25, color: TZ.ink2, fontWeight: 500 }}>@helionapp</span>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        fontFamily: MONO, fontSize: story ? 22 : 20, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: TZ.neon, background: 'rgba(213,255,58,0.08)', border: '1px solid rgba(213,255,58,0.32)',
        padding: story ? '11px 18px' : '10px 16px', borderRadius: 999,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 99, background: TZ.neon, boxShadow: `0 0 10px ${TZ.neon}` }} />
        {cta}
      </span>
    </div>
  );
}

/* ============ visual props ============ */

function DecliningChart({ w, h }) {
  // a generation curve dipping below expected — red zone
  return (
    <svg viewBox="0 0 600 280" width={w} height={h} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="tzRedFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TZ.red} stopOpacity="0.28" />
          <stop offset="100%" stopColor={TZ.red} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[60, 130, 200].map((y) => (
        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke={TZ.line} strokeWidth="1" strokeDasharray="3 7" />
      ))}
      {/* expected (dim dashed) */}
      <path d="M0,150 C120,80 200,55 300,55 C400,55 480,70 600,70"
        fill="none" stroke={TZ.ink3} strokeWidth="2.5" strokeDasharray="6 8" opacity="0.6" />
      {/* actual (red, dropping) */}
      <path d="M0,160 C110,120 180,110 260,140 C330,166 380,210 460,232 C520,248 560,250 600,252 L600,280 L0,280 Z"
        fill="url(#tzRedFill)" />
      <path d="M0,160 C110,120 180,110 260,140 C330,166 380,210 460,232 C520,248 560,250 600,252"
        fill="none" stroke={TZ.red} strokeWidth="4" strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 8px ${TZ.red}88)` }} />
      <circle cx="600" cy="252" r="8" fill={TZ.red} />
      <text x="14" y="44" fontFamily={MONO} fontSize="18" fill={TZ.ink3}>esperado</text>
      <text x="470" y="200" fontFamily={MONO} fontSize="18" fill={TZ.red}>real ↓</text>
    </svg>
  );
}

function InvoiceCard({ w }) {
  const Row = ({ label, val, color, redact }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
      <span style={{ fontSize: 24, color: TZ.ink2 }}>{label}</span>
      {redact
        ? <span style={{ width: 150, height: 18, borderRadius: 5, background: TZ.line2 }} />
        : <span style={{ fontFamily: MONO, fontSize: 24, color: color || TZ.white }}>{val}</span>}
    </div>
  );
  return (
    <div style={{ width: w, background: TZ.panel, border: `1px solid ${TZ.line2}`, borderRadius: 22, padding: '26px 30px', boxShadow: '0 40px 90px -40px rgba(0,0,0,0.8)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, fontWeight: 600 }}>Fatura · UC ••••••</span>
        <span style={{ fontFamily: MONO, fontSize: 18, color: TZ.ink3 }}>ABR/2026</span>
      </div>
      <Row label="Energia injetada" val="612 kWh" color={TZ.greenL} />
      <div style={{ height: 1, background: TZ.line }} />
      <Row label="Compensado na fatura" val="498 kWh" color={TZ.red} />
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 18, padding: '16px 18px', borderRadius: 14, background: 'rgba(255,77,94,0.10)', border: '1px solid rgba(255,77,94,0.4)' }}>
        <span style={{ color: TZ.red, fontSize: 24 }}>✕</span>
        <span style={{ fontSize: 21, color: TZ.white, lineHeight: 1.35 }}><b style={{ color: TZ.red }}>114 kWh não compensados.</b> Prejuízo silencioso no fim do mês.</span>
      </div>
    </div>
  );
}

function Pillars({ fmt }) {
  const story = fmt === 'story';
  const items = [
    { t: 'Monitoramento', s: 'multi-inversor, ao vivo', c: TZ.greenL,
      d: 'M3 18l4-5 3 3 5-7 6 9' },
    { t: 'Faturas & Compensação', s: 'leitura por IA', c: TZ.lilac,
      d: 'M6 3h9l3 3v15H6zM9 9h6M9 13h6M9 17h3' },
    { t: 'Créditos & Cobrança', s: 'boletos automáticos', c: TZ.neon,
      d: 'M3 7h18v10H3zM3 11h18M7 15h3' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: story ? 'column' : 'row', gap: story ? 22 : 20, width: '100%' }}>
      {items.map((it, i) => (
        <div key={i} style={{
          flex: 1, background: `linear-gradient(180deg, ${TZ.bg2}, ${TZ.bg1})`,
          border: `1px solid ${TZ.line}`, borderRadius: 22, padding: story ? '30px 32px' : '30px 26px',
          display: 'flex', flexDirection: story ? 'row' : 'column', alignItems: story ? 'center' : 'flex-start', gap: story ? 24 : 0,
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16, flexShrink: 0,
            display: 'grid', placeItems: 'center', marginBottom: story ? 0 : 22,
            background: `${it.c}1f`, border: `1px solid ${it.c}55`,
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={it.c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={it.d} /></svg>
          </div>
          <div>
            <div style={{ fontSize: story ? 32 : 28, fontWeight: 600, letterSpacing: '-0.015em' }}>{it.t}</div>
            <div style={{ fontFamily: MONO, fontSize: story ? 20 : 18, color: TZ.ink3, marginTop: 6, letterSpacing: '0.04em' }}>{it.s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============ posters ============ */
function TeaserPoster({ n, fmt = 'feed' }) {
  const story = fmt === 'story';
  const S = (a, b) => (story ? b : a);
  const H = (px) => ({ fontSize: px, lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 500, margin: 0, textWrap: 'balance' });
  const body = { fontSize: S(27, 31), lineHeight: 1.45, color: TZ.ink2, margin: 0, maxWidth: story ? '20ch' : '24ch' };

  // 1 — INTRIGA
  if (n === 1) {
    return (
      <Frame fmt={fmt} fade={S('50% 40%', '50% 38%')}>
        <Aura style={{ top: S(140, 360), left: '50%', transform: 'translateX(-50%)', width: S(640, 760), height: S(560, 700), background: `radial-gradient(circle, ${TZ.green}3a, transparent 60%)`, opacity: 0.8 }} />
        <TopBar n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: S(40, 56) }}>
          <HexMark size={S(264, 320)} glow={0.5} />
          <Eyebrow>Pré-lançamento</Eyebrow>
          <h1 style={{ ...H(S(66, 84)), maxWidth: story ? '15ch' : '17ch' }}>
            Algo está prestes a mudar a forma como você <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: TZ.greenL }}>opera energia solar.</span>
          </h1>
        </div>
        <Footer fmt={fmt} />
      </Frame>
    );
  }

  // 2 — DOR: GERAÇÃO
  if (n === 2) {
    return (
      <Frame fmt={fmt} fade="78% 18%">
        <Aura style={{ top: S(120, 300), right: -120, width: 520, height: 460, background: `radial-gradient(circle, ${TZ.red}22, transparent 60%)`, opacity: 0.7 }} />
        <TopBar n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: S(40, 56) }}>
          <Eyebrow color={TZ.red}>O que você não vê</Eyebrow>
          <h1 style={{ ...H(S(64, 82)), maxWidth: story ? '15ch' : '18ch' }}>
            Quantas das suas usinas estão gerando <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: TZ.red }}>menos do que deveriam</span> — agora?
          </h1>
          <div style={{ marginTop: S(8, 20) }}>
            <DecliningChart w={S(560, 720)} h={S(240, 320)} />
          </div>
          <p style={body}>Hoje, a queda só aparece quando o mês fecha. E o prejuízo, também.</p>
        </div>
        <Footer fmt={fmt} cta="em breve" />
      </Frame>
    );
  }

  // 3 — DOR: FATURA / COMPENSAÇÃO
  if (n === 3) {
    return (
      <Frame fmt={fmt} fade="26% 24%">
        <Aura style={{ bottom: S(120, 280), left: -120, width: 520, height: 460, background: `radial-gradient(circle, ${TZ.lilac}26, transparent 60%)`, opacity: 0.6 }} />
        <TopBar n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: S(40, 54) }}>
          <Eyebrow color={TZ.lilac}>A conta não bate</Eyebrow>
          <h1 style={{ ...H(S(62, 80)), maxWidth: story ? '16ch' : '19ch' }}>
            O crédito que sua usina injetou foi mesmo <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: TZ.lilac }}>abatido na fatura?</span>
          </h1>
          <InvoiceCard w={S(620, 800)} />
          <p style={body}>Alguém precisa conferir, mês a mês. Logo, será automático.</p>
        </div>
        <Footer fmt={fmt} />
      </Frame>
    );
  }

  // 4 — PROMESSA
  if (n === 4) {
    return (
      <Frame fmt={fmt} fade="50% 16%">
        <Aura style={{ top: S(120, 320), left: '50%', transform: 'translateX(-50%)', width: 760, height: 520, background: `radial-gradient(circle, ${TZ.green}2e, transparent 62%)`, opacity: 0.7 }} />
        <TopBar n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: S(48, 64) }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: S(22, 30) }}>
            <Eyebrow>Em um só lugar</Eyebrow>
            <h1 style={{ ...H(S(64, 84)), maxWidth: story ? '14ch' : '18ch' }}>
              Sua operação solar inteira deixa de ser <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: TZ.neon }}>planilha.</span>
            </h1>
          </div>
          <Pillars fmt={fmt} />
        </div>
        <Footer fmt={fmt} />
      </Frame>
    );
  }

  // 5 — REVELAÇÃO
  return (
    <Frame fmt={fmt} fade="50% 42%">
      <Aura style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: S(820, 900), height: S(620, 760), background: `radial-gradient(circle at 40% 40%, ${TZ.green}38, transparent 55%), radial-gradient(circle at 70% 60%, ${TZ.lilac}22, transparent 55%)`, opacity: 0.9 }} />
      <TopBar n={n} fmt={fmt} />
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: S(36, 50) }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: S(22, 28) }}>
          <HexMark size={S(120, 150)} glow={0.6} />
          <span style={{ fontWeight: 600, letterSpacing: '-0.04em', fontSize: S(112, 140) }}>helion</span>
        </div>
        <h1 style={{ ...H(S(46, 58)), maxWidth: story ? '17ch' : '20ch', color: TZ.white, fontWeight: 400, fontFamily: SERIF, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
          A plataforma que opera energia solar <span style={{ color: TZ.greenL }}>no piloto automático.</span>
        </h1>
        <div style={{
          marginTop: S(16, 26), fontFamily: MONO, fontWeight: 500,
          fontSize: S(40, 50), letterSpacing: '0.18em', textTransform: 'uppercase',
          color: TZ.neon, textShadow: `0 0 30px ${TZ.neon}66`,
        }}>
          Em breve
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: S(26, 30), color: TZ.ink2, fontWeight: 500 }}>@helionapp</span>
        <span style={{ color: TZ.line2 }}>·</span>
        <span style={{ fontSize: S(26, 30), color: TZ.ink2 }}>helionapp.com.br</span>
      </div>
    </Frame>
  );
}

Object.assign(window, { TeaserPoster, HexMark, Wordmark, GridBG, Aura, Eyebrow, Frame, TopBar, Footer, DecliningChart, TZ, SERIF, MONO });
