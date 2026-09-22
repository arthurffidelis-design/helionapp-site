/* Helion · Teaser de lançamento — CLIENTE FINAL (B2C, dono da usina)
   Exporta window.TeaserPosterB2C({ n, fmt }) — reaproveita primitivas de teaser-posters.jsx */

const { HexMark: HX, GridBG: BG, Aura: AU, Eyebrow: EB, Frame: FR, TopBar: TB, Footer: FT, DecliningChart: DC, TZ: C, SERIF: SF, MONO: MN } = window;

/* comparativo objetivo: o que a usina gerou × o que foi descontado na conta */
function BillB2C({ w, fmt }) {
  const Row = ({ label, val, color }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '17px 0' }}>
      <span style={{ fontSize: 24, color: C.ink2 }}>{label}</span>
      <span style={{ fontFamily: MN, fontSize: 26, color: color || C.white, fontWeight: 500 }}>{val}</span>
    </div>
  );
  return (
    <div style={{ width: w, background: C.panel, border: `1px solid ${C.line2}`, borderRadius: 22, padding: '26px 30px', boxShadow: '0 40px 90px -40px rgba(0,0,0,0.8)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 22, fontWeight: 600 }}>Minha conta de luz</span>
        <span style={{ fontFamily: MN, fontSize: 18, color: C.ink3 }}>ABR/2026</span>
      </div>
      <Row label="Minha usina gerou" val="612 kWh" color={C.greenL} />
      <div style={{ height: 1, background: C.line }} />
      <Row label="Descontado na conta" val="498 kWh" color={C.red} />
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 16, padding: '16px 18px', borderRadius: 14, background: 'rgba(255,77,94,0.10)', border: '1px solid rgba(255,77,94,0.4)' }}>
        <span style={{ color: C.red, fontSize: 22, fontWeight: 700 }}>−114</span>
        <span style={{ fontSize: 21, color: C.white, lineHeight: 1.35 }}><b style={{ color: C.red }}>114 kWh não foram descontados.</b> Você pagou a mais sem saber.</span>
      </div>
    </div>
  );
}

function BenefitsB2C({ fmt }) {
  const story = fmt === 'story';
  const items = [
    { t: 'Geração ao vivo', s: 'veja seus painéis hoje', c: C.greenL, d: 'M3 18l4-5 3 3 5-7 6 9' },
    { t: 'Alerta no WhatsApp', s: 'se algo parar, você sabe', c: C.neon, d: 'M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z' },
    { t: 'Conta conferida', s: 'sua economia garantida', c: C.lilac, d: 'M5 13l4 4L19 7' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: story ? 'column' : 'row', gap: story ? 22 : 20, width: '100%' }}>
      {items.map((it, i) => (
        <div key={i} style={{
          flex: 1, background: `linear-gradient(180deg, ${C.bg2}, ${C.bg1})`,
          border: `1px solid ${C.line}`, borderRadius: 22, padding: story ? '30px 32px' : '30px 26px',
          display: 'flex', flexDirection: story ? 'row' : 'column', alignItems: story ? 'center' : 'flex-start', gap: story ? 24 : 0,
        }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, flexShrink: 0, display: 'grid', placeItems: 'center', marginBottom: story ? 0 : 22, background: `${it.c}1f`, border: `1px solid ${it.c}55` }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={it.c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={it.d} /></svg>
          </div>
          <div>
            <div style={{ fontSize: story ? 32 : 27, fontWeight: 600, letterSpacing: '-0.015em' }}>{it.t}</div>
            <div style={{ fontFamily: MN, fontSize: story ? 20 : 17, color: C.ink3, marginTop: 6, letterSpacing: '0.04em' }}>{it.s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeaserPosterB2C({ n, fmt = 'feed' }) {
  const story = fmt === 'story';
  const S = (a, b) => (story ? b : a);
  const H = (px) => ({ fontSize: px, lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 500, margin: 0, textWrap: 'balance' });
  const body = { fontSize: S(27, 31), lineHeight: 1.45, color: C.ink2, margin: 0, maxWidth: story ? '20ch' : '24ch' };

  // 1 — INTRIGA
  if (n === 1) {
    return (
      <FR fmt={fmt} fade={S('50% 40%', '50% 38%')}>
        <AU style={{ top: S(140, 360), left: '50%', transform: 'translateX(-50%)', width: S(640, 760), height: S(560, 700), background: `radial-gradient(circle, ${C.green}3a, transparent 60%)`, opacity: 0.8 }} />
        <TB n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: S(40, 56) }}>
          <HX size={S(264, 320)} glow={0.5} />
          <EB>Pré-lançamento</EB>
          <h1 style={{ ...H(S(64, 82)), maxWidth: story ? '15ch' : '17ch' }}>
            Seus painéis trabalham o dia todo. <span style={{ fontFamily: SF, fontStyle: 'italic', color: C.greenL }}>E se você pudesse ver isso?</span>
          </h1>
        </div>
        <FT fmt={fmt} />
      </FR>
    );
  }

  // 2 — DOR: GERAÇÃO
  if (n === 2) {
    return (
      <FR fmt={fmt} fade="78% 18%">
        <AU style={{ top: S(120, 300), right: -120, width: 520, height: 460, background: `radial-gradient(circle, ${C.red}22, transparent 60%)`, opacity: 0.7 }} />
        <TB n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: S(40, 56) }}>
          <EB color={C.red}>O que você não vê</EB>
          <h1 style={{ ...H(S(64, 82)), maxWidth: story ? '15ch' : '18ch' }}>
            Seu painel pode estar gerando <span style={{ fontFamily: SF, fontStyle: 'italic', color: C.red }}>menos hoje</span> — e você nem sabe.
          </h1>
          <div style={{ marginTop: S(8, 20) }}>
            <DC w={S(560, 720)} h={S(240, 320)} />
          </div>
          <p style={body}>Uma falha silenciosa vira prejuízo no fim do mês. Dá pra perceber na hora.</p>
        </div>
        <FT fmt={fmt} cta="em breve" />
      </FR>
    );
  }

  // 3 — DOR: FATURA / ECONOMIA
  if (n === 3) {
    return (
      <FR fmt={fmt} fade="26% 24%">
        <AU style={{ bottom: S(120, 280), left: -120, width: 520, height: 460, background: `radial-gradient(circle, ${C.lilac}26, transparent 60%)`, opacity: 0.6 }} />
        <TB n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: S(40, 54) }}>
          <EB color={C.lilac}>A sua conta de luz</EB>
          <h1 style={{ ...H(S(60, 78)), maxWidth: story ? '16ch' : '19ch' }}>
            Sua usina gerou crédito. <span style={{ fontFamily: SF, fontStyle: 'italic', color: C.lilac }}>Tudo foi descontado na conta?</span>
          </h1>
          <BillB2C w={S(620, 800)} fmt={fmt} />
          <p style={body}>Quase ninguém confere — e paga a mais. Em breve, o Helion confere por você.</p>
        </div>
        <FT fmt={fmt} />
      </FR>
    );
  }

  // 4 — PROMESSA
  if (n === 4) {
    return (
      <FR fmt={fmt} fade="50% 16%">
        <AU style={{ top: S(120, 320), left: '50%', transform: 'translateX(-50%)', width: 760, height: 520, background: `radial-gradient(circle, ${C.green}2e, transparent 62%)`, opacity: 0.7 }} />
        <TB n={n} fmt={fmt} />
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: S(48, 64) }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: S(22, 30) }}>
            <EB>Tudo no seu bolso</EB>
            <h1 style={{ ...H(S(64, 84)), maxWidth: story ? '14ch' : '18ch' }}>
              A sua usina solar, <span style={{ fontFamily: SF, fontStyle: 'italic', color: C.neon }}>na palma da mão.</span>
            </h1>
          </div>
          <BenefitsB2C fmt={fmt} />
        </div>
        <FT fmt={fmt} />
      </FR>
    );
  }

  // 5 — REVELAÇÃO
  return (
    <FR fmt={fmt} fade="50% 42%">
      <AU style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: S(820, 900), height: S(620, 760), background: `radial-gradient(circle at 40% 40%, ${C.green}38, transparent 55%), radial-gradient(circle at 70% 60%, ${C.lilac}22, transparent 55%)`, opacity: 0.9 }} />
      <TB n={n} fmt={fmt} />
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: S(36, 50) }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: S(22, 28) }}>
          <HX size={S(120, 150)} glow={0.6} />
          <span style={{ fontWeight: 600, letterSpacing: '-0.04em', fontSize: S(112, 140) }}>helion</span>
        </div>
        <h1 style={{ ...H(S(48, 60)), maxWidth: story ? '15ch' : '18ch', color: C.white, fontWeight: 400, fontFamily: SF, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
          A sua usina solar <span style={{ color: C.greenL }}>no bolso.</span>
        </h1>
        <div style={{ marginTop: S(16, 26), fontFamily: MN, fontWeight: 500, fontSize: S(40, 50), letterSpacing: '0.18em', textTransform: 'uppercase', color: C.neon, textShadow: `0 0 30px ${C.neon}66` }}>
          Em breve
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: S(26, 30), color: C.ink2, fontWeight: 500 }}>@helionapp</span>
        <span style={{ color: C.line2 }}>·</span>
        <span style={{ fontSize: S(26, 30), color: C.ink2 }}>helionapp.com.br</span>
      </div>
    </FR>
  );
}

window.TeaserPosterB2C = TeaserPosterB2C;
