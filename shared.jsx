// shared.jsx — calm/trust palette + small warmth, restrained primitives

const TOKENS = {
  paper:   '#F7F3EB',
  paperHi: '#FBF8F2',
  ink:     '#1C1B19',
  inkSoft: '#3A3936',
  mute:    '#6E6A63',
  rule:    '#E2DCCC',

  // primary calm accent (trust)
  accent:     '#2F4858',
  accentSoft: '#E5EBEE',

  // warm child-friendly secondary palette — used sparingly as small dots / chips
  // so the page reads "for kids" without becoming busy.
  sunny:    '#F2C84B',
  sunnySoft:'#FBEBB6',
  coral:    '#E68F75',
  coralSoft:'#F8D9CE',
  mint:     '#7DBFA5',
  mintSoft: '#D6EAE0',
  sky:      '#8FB4D1',
};

const LOGOS = {
  atanpicBlack:        'assets/atanpic-black.png',
  atanpicWhite:        'assets/atanpic-white.png',
  studiogorillaBlack:  'assets/studiogorilla-black.png',
  studiogorillaWhite:  'assets/studiogorilla-white.png',
};

const PROMISES = ['広告なし', '課金なし', '個人情報収集なし'];

const COPY = {
  brandLine: 'PoYoYonLearning は、未就学児むけの知育アプリを夫婦で開発するキッズレーベルです。',
  brandLineLong: '色・ことば・ゲーム感で、子どもの好奇心を刺激する。夫婦で開発、わが子がテスター。あかちゃんから安心して遊べるアプリを、ていねいに作っています。',
  appName: 'ぽよタッチベビ',
  appNameSub: 'PoYo Touch Baby — 3D Collection',
  appPitch: '画面をタッチすると、3Dオブジェクトが現れ、ぽよぽよと揺れ動きます。',
  appBlurb: 'オブジェクトや色は毎回ランダムに切り替わり、名前や色に親しめます。見たオブジェクトは図鑑にコレクションされ、あとから眺めることもできます。',
  email: 'PoYoYonLearning@gmail.com',
};

// Three calm pill chips — outlined, with a tiny color dot to add a touch of warmth.
const PrivacyBadges = ({ tone = 'light', dotted = true }) => {
  const onDark = tone === 'dark';
  const text = onDark ? TOKENS.paper : TOKENS.inkSoft;
  const border = onDark ? 'rgba(247,243,235,.4)' : TOKENS.rule;
  const dots = [TOKENS.coral, TOKENS.sunny, TOKENS.mint];
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {PROMISES.map((p, i) => (
        <span key={p} style={{
          padding: '8px 16px 8px 12px',
          fontSize: 13, fontWeight: 600,
          letterSpacing: '.02em',
          borderRadius: 999,
          color: text,
          border: `1px solid ${border}`,
          background: 'transparent',
          whiteSpace: 'nowrap',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          {dotted && (
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: dots[i], display: 'inline-block',
            }} />
          )}
          {p}
        </span>
      ))}
    </div>
  );
};

// Footer credit — small, dignified.
const CreditStrip = ({ tone = 'light' }) => {
  const onDark = tone === 'dark';
  const useWhite = onDark;
  const fg  = onDark ? TOKENS.paper : TOKENS.ink;
  const sub = onDark ? 'rgba(247,243,235,.55)' : TOKENS.mute;

  const Item = ({ logoKey, role, name, href, logoH = 26 }) => (
    <a href={href} target="_blank" rel="noopener" style={{
      display: 'flex', flexDirection: 'column', gap: 8,
      textDecoration: 'none', color: 'inherit', padding: '4px 0',
    }}>
      <div style={{
        fontSize: 10.5, letterSpacing: '.24em', fontWeight: 600,
        color: sub, fontFamily: '"Inter", system-ui, sans-serif',
        textTransform: 'uppercase',
      }}>{role}</div>
      <img src={LOGOS[logoKey]} alt={name}
        style={{ height: logoH, width: 'auto', display: 'block', opacity: .92 }} />
      <div style={{
        fontSize: 12, color: sub,
        fontFamily: '"Inter", system-ui, sans-serif',
      }}>{href.replace('https://','')} ↗</div>
    </a>
  );

  return (
    <div style={{
      display: 'flex', gap: 56, color: fg, flexWrap: 'wrap',
    }}>
      <Item
        logoKey={useWhite ? 'atanpicWhite' : 'atanpicBlack'}
        role="Papa"
        name="atanpic"
        href="https://atanpic.com"
        logoH={22}
      />
      <Item
        logoKey={useWhite ? 'studiogorillaWhite' : 'studiogorillaBlack'}
        role="Mama"
        name="studiogorilla★"
        href="https://studiogorillastar.com"
        logoH={32}
      />
    </div>
  );
};

Object.assign(window, { TOKENS, LOGOS, PROMISES, COPY, PrivacyBadges, CreditStrip });
