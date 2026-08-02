// variation-d.jsx — "Card-led · Kids" (採用案) — responsive
// Based on Variation C, pivoted joyful for children (アミコ氏 direction):
//   - Hero: brand name ONLY, framed by the real ぽよタッチベビ 3D assets + sparkles.
//     Desktop uses the fixed 1280 composition; mobile swaps to a dedicated
//     corner-framed layout so the brand + tagline stay readable.
//   - Apps: icon-first cards; a small phone glyph keeps it clearly "an app".
//     Scales to multiple apps; a 2nd placeholder card shows the multi-app layout.
//   - Section headers unified (eyebrow + rounded heading), no §01 indices.
//   - Footer: logos on equal-height plates; no role labels.

function VariationD({ density = 'regular' }) {
  const T = window.TOKENS;
  const showLong = density !== 'minimal';
  const showRich = density === 'rich';

  // ── responsive ──────────────────────────────────────────────────────
  const [vw, setVw] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  React.useEffect(() => {
    const f = () => setVw(window.innerWidth);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const isMobile = vw < 760;
  const heroFixed = vw >= 1280;
  const padX = isMobile ? 22 : 64;

  const fontSans  = '"Noto Sans JP", "Hiragino Sans", system-ui, sans-serif';
  const fontRound = '"M PLUS Rounded 1c", "Hiragino Sans", system-ui, sans-serif';
  const fontMono  = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

  const heroBg = 'radial-gradient(120% 92% at 50% 6%, #EAF3FB 0%, #F6F0E6 52%, #F1EADC 100%)';

  // ── real 3D collection assets — desktop scatter (1280 canvas) ────────
  const toys = [
    { src: 'assets/0.png',   x: 64,   y: 112, s: 152, r: -12, d: 0.0 }, // red car
    { src: 'assets/149.png', x: 452,  y: 44,  s: 88,  r: -14, d: 0.6 }, // rainbow star
    { src: 'assets/141.png', x: 742,  y: 52,  s: 80,  r: 14,  d: 1.1 }, // yellow star
    { src: 'assets/290.png', x: 1006, y: 84,  s: 150, r: 12,  d: 0.3 }, // orange umbrella
    { src: 'assets/150.png', x: 48,   y: 338, s: 100, r: -8,  d: 0.9 }, // red heart
    { src: 'assets/305.png', x: 1064, y: 322, s: 98,  r: -10, d: 0.5 }, // orange butterfly
    { src: 'assets/1.png',   x: 104,  y: 508, s: 150, r: 8,   d: 1.3 }, // blue car
    { src: 'assets/359.png', x: 410,  y: 540, s: 148, r: 5,   d: 0.2 }, // rainbow pegasus
    { src: 'assets/246.png', x: 712,  y: 556, s: 122, r: -6,  d: 0.8 }, // yellow shoes
    { src: 'assets/62.png',  x: 976,  y: 506, s: 168, r: -8,  d: 0.4 }, // green bus
  ];
  const sparkles = [
    { x: 240, y: 210, s: 26, o: .9 }, { x: 620, y: 120, s: 20, o: .8 },
    { x: 940, y: 240, s: 24, o: .85 }, { x: 330, y: 430, s: 18, o: .75 },
    { x: 880, y: 430, s: 22, o: .8 }, { x: 600, y: 500, s: 16, o: .7 },
  ];

  // ── mobile hero — 4 corner toys keep the vertical center clear ───────
  const toysM = [
    { src: 'assets/0.png',   pos: { left: '-18px', top: '58px'    }, s: 96,  r: -12, d: 0.0 },
    { src: 'assets/290.png', pos: { right: '-20px', top: '46px'   }, s: 108, r: 12,  d: 0.3 },
    { src: 'assets/1.png',   pos: { left: '-16px', bottom: '44px' }, s: 100, r: 8,   d: 1.0 },
    { src: 'assets/62.png',  pos: { right: '-18px', bottom: '30px'}, s: 114, r: -8,  d: 0.4 },
  ];
  const sparklesM = [
    { pos: { left: '20%', top: '26%'    }, s: 16, o: .85 },
    { pos: { right: '18%', top: '30%'   }, s: 14, o: .8 },
    { pos: { left: '50%', bottom: '22%' }, s: 12, o: .7 },
  ];

  // ── apps (scales to N; 2nd is a placeholder to show the multi-app layout) ──
  const apps = [
    {
      icon: 'assets/icon.png',
      name: COPY.appName, sub: COPY.appNameSub,
      pitch: ['画面のどこを触っても、必ず反応がある。', '「できた！」が生まれるアプリ。'],
      blurb: '画面タッチで３Ｄオブジェクトが現れ、ぽよぽよと揺れ動きます。オブジェクトや色は毎回ランダムに切り替わり、名前や色に親しめます。見たオブジェクトは図鑑にコレクションされ、あとから眺めることもできます。',
      network: 'なし（完全オフライン）',
      live: true,
      androidUrl: 'https://play.google.com/store/apps/details?id=com.poyoyonlearning.poyotouchbaby3d',
    },
    { icon: null, name: 'つぎのアプリを開発中', sub: 'Coming soon', pitch: [], blurb: '', live: false },
  ];

  const dotColors = ['#3FA0E0', '#E5559B', '#F5872E', '#7DBFA5', '#F2C84B', '#7C6FE0'];
  const brandSpans = (() => {
    let di = 0;
    return 'PoYoYonLearning'.split('').map((ch, i) => {
      const tinted = ch === 'o' || ch === 'Y';
      const color = tinted ? dotColors[di++ % dotColors.length] : T.accent;
      return <span key={i} style={{ color }}>{ch}</span>;
    });
  })();

  const Tagline = ({ maxW }) => (
    <p style={{
      position: 'relative', zIndex: 2, margin: `${isMobile ? 22 : 28}px auto 0`,
      maxWidth: maxW, fontSize: isMobile ? 13.5 : 14, lineHeight: 1.85,
      color: T.inkSoft, fontWeight: 500,
    }}>
      夫婦で開発、わが子がテスター。<br/>あかちゃんから安心して遊べるアプリを、すこしずつ作っています。
    </p>
  );

  // small phone glyph → "this is a smartphone app"
  const PhoneTag = ({ soft }) => (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '7px 13px 7px 11px', borderRadius: 999,
      background: soft ? 'transparent' : T.accentSoft,
      border: `1px solid ${soft ? T.rule : 'transparent'}`,
      color: soft ? T.mute : T.accent,
      fontSize: 12, fontWeight: 600, letterSpacing: '.02em',
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="10" y1="18.5" x2="14" y2="18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      スマートフォンアプリ
    </div>
  );

  const eyebrow = (text) => (
    <div style={{
      fontSize: 11.5, letterSpacing: '.3em', fontWeight: 600,
      color: T.accent, textTransform: 'uppercase',
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>{text}</div>
  );

  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: T.paper, color: T.ink, fontFamily: fontSans,
    }}>
      <style>{`
        @keyframes poyoPop {
          from { transform: translateY(16px) scale(.86) rotate(var(--r)); opacity: 0; }
          to   { transform: translateY(0) scale(1) rotate(var(--r)); opacity: 1; }
        }
        @keyframes poyoSparkIn {
          from { transform: scale(0) rotate(-45deg); opacity: 0; }
          to   { transform: scale(1) rotate(0deg); opacity: var(--o); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .poyo-toy   { animation: poyoPop .7s cubic-bezier(.34,1.56,.64,1) both; }
          .poyo-spark { animation: poyoSparkIn .6s ease-out both; }
        }
      `}</style>

      {/* Top bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'rgba(247,243,235,0.92)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${T.rule}`, padding: `${isMobile ? 12 : 14}px ${padX}px`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: fontRound, fontSize: isMobile ? 15.5 : 17, fontWeight: 700,
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: 7, overflow: 'hidden',
            display: 'inline-block', boxShadow: '0 2px 5px rgba(0,0,0,.12)',
          }}>
            <img src="assets/icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </span>
          PoYoYonLearning
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {!isMobile && (
            <>
              <a href="#app" style={{ padding: '8px 14px', color: T.inkSoft, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>アプリ</a>
              <a href="privacy/" style={{ padding: '8px 14px', color: T.inkSoft, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>プライバシー</a>
            </>
          )}
          <a href={`mailto:${COPY.email}`} style={{
            padding: isMobile ? '8px 14px' : '9px 18px', color: T.paper, background: T.accent,
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
            borderRadius: 999, marginLeft: isMobile ? 0 : 8,
          }}>お問い合わせ</a>
        </div>
      </div>

      {/* HERO */}
      {!heroFixed ? (
        <section style={{
          position: 'relative', overflow: 'hidden', minHeight: 500,
          padding: `${isMobile ? 104 : 132}px 22px ${isMobile ? 92 : 120}px`,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          background: heroBg,
        }}>
          {toysM.map((t, i) => (
            <img key={i} src={t.src} alt="" aria-hidden="true" className="poyo-toy"
              style={{
                position: 'absolute', ...t.pos,
                width: t.s, height: t.s, objectFit: 'contain',
                transform: `rotate(${t.r}deg)`,
                ['--r']: `${t.r}deg`, animationDelay: `${t.d}s`,
                filter: 'drop-shadow(0 8px 12px rgba(60,40,20,.14))',
                pointerEvents: 'none', userSelect: 'none', zIndex: 1,
              }} />
          ))}
          {sparklesM.map((s, i) => (
            <span key={i} className="poyo-spark" aria-hidden="true"
              style={{
                position: 'absolute', ...s.pos,
                width: s.s, height: s.s, background: '#FFD34E',
                clipPath: 'polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)',
                filter: 'drop-shadow(0 1px 2px rgba(120,90,40,.25))',
                ['--o']: s.o, opacity: s.o, animationDelay: `${i * 0.5}s`,
                pointerEvents: 'none', zIndex: 1,
              }} />
          ))}
          <h1 style={{
            position: 'relative', zIndex: 2, margin: 0,
            fontFamily: fontRound, fontWeight: 800,
            fontSize: 'clamp(30px, 8.6vw, 58px)', lineHeight: 1.05, letterSpacing: '.01em',
            whiteSpace: 'nowrap',
            filter: 'drop-shadow(0 4px 10px rgba(40,50,60,.16))',
          }}>{brandSpans}</h1>
          <Tagline maxW={420} />
        </section>
      ) : (
        <section style={{
          position: 'relative', overflow: 'hidden', height: 740,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          background: heroBg, padding: '0 48px',
        }}>
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            width: 1280, height: 740, transform: 'translate(-50%, -50%)',
            pointerEvents: 'none', zIndex: 1,
          }}>
          {toys.map((t, i) => (
            <img key={i} src={t.src} alt="" aria-hidden="true" className="poyo-toy"
              style={{
                position: 'absolute', left: t.x, top: t.y,
                width: t.s, height: t.s, objectFit: 'contain',
                transform: `rotate(${t.r}deg)`,
                ['--r']: `${t.r}deg`, animationDelay: `${t.d}s`,
                filter: 'drop-shadow(0 10px 16px rgba(60,40,20,.14))',
                pointerEvents: 'none', userSelect: 'none', zIndex: 1,
              }} />
          ))}
          {sparkles.map((s, i) => (
            <span key={i} className="poyo-spark" aria-hidden="true"
              style={{
                position: 'absolute', left: s.x, top: s.y,
                width: s.s, height: s.s, background: '#FFD34E',
                clipPath: 'polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)',
                filter: 'drop-shadow(0 1px 2px rgba(120,90,40,.25))',
                ['--o']: s.o, opacity: s.o, animationDelay: `${i * 0.5}s`,
                pointerEvents: 'none', zIndex: 1,
              }} />
          ))}
          </div>
          <h1 style={{
            position: 'relative', zIndex: 2, margin: 0,
            fontFamily: fontRound, fontWeight: 800,
            fontSize: 92, lineHeight: 1.05, letterSpacing: '.01em',
            filter: 'drop-shadow(0 5px 12px rgba(40,50,60,.16))',
            whiteSpace: 'nowrap',
          }}>{brandSpans}</h1>
          <Tagline maxW={560} />
        </section>
      )}

      {/* APPS — icon-first cards, scales to multiple apps */}
      <section id="app" style={{
        padding: `${isMobile ? 52 : 76}px ${padX}px`, borderTop: `1px solid ${T.rule}`, background: T.paperHi,
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: isMobile ? 28 : 40 }}>
            {eyebrow('Apps')}
            <h2 style={{
              margin: 0, fontFamily: fontRound, fontWeight: 700,
              fontSize: isMobile ? 26 : 32, lineHeight: 1.3,
            }}>つくっているアプリ</h2>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? 18 : 28, alignItems: 'stretch',
          }}>
            {apps.map((app, i) => (
              <div key={i} style={{
                background: app.live ? T.paper : 'transparent',
                border: `1.5px ${app.live ? 'solid' : 'dashed'} ${T.rule}`,
                borderRadius: 24, padding: isMobile ? 22 : 30,
                display: 'flex', flexDirection: 'column',
                boxShadow: app.live ? '0 18px 40px -28px rgba(40,30,10,.4)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 14 : 18 }}>
                  {app.icon ? (
                    <img src={app.icon} alt={`${app.name} アイコン`}
                      style={{
                        width: isMobile ? 76 : 92, height: isMobile ? 76 : 92, borderRadius: 20, flexShrink: 0,
                        boxShadow: '0 10px 22px -8px rgba(0,0,0,.3)', display: 'block',
                      }} />
                  ) : (
                    <div style={{
                      width: isMobile ? 76 : 92, height: isMobile ? 76 : 92, borderRadius: 20, flexShrink: 0,
                      background: 'repeating-linear-gradient(135deg, #EFEADD, #EFEADD 8px, #F5F1E7 8px, #F5F1E7 16px)',
                      border: `1.5px dashed ${T.rule}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: T.mute, fontSize: 34, fontWeight: 300, fontFamily: fontRound,
                    }}>+</div>
                  )}
                  <div>
                    <h3 style={{
                      margin: 0, fontFamily: fontRound, fontWeight: 700,
                      fontSize: isMobile ? 21 : 24, lineHeight: 1.25,
                      color: app.live ? T.ink : T.mute,
                    }}>{app.name}</h3>
                    <div style={{
                      marginTop: 5, fontFamily: fontMono, fontSize: 11.5,
                      color: T.mute, letterSpacing: '.05em',
                    }}>{app.sub}</div>
                  </div>
                </div>

                {app.pitch.length > 0 && (
                  <p style={{
                    margin: '24px 0 0', fontSize: isMobile ? 16 : 17, lineHeight: 1.75, fontWeight: 500,
                    color: app.live ? T.ink : T.mute,
                  }}>
                    {app.pitch.map((line, j) => (
                      <React.Fragment key={j}>{line}{j < app.pitch.length - 1 && <br/>}</React.Fragment>
                    ))}
                  </p>
                )}

                {app.live && showLong && (
                  <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.95, color: T.inkSoft }}>
                    {app.blurb}
                  </p>
                )}

                {app.live && showRich && (
                  <ul style={{ margin: '22px 0 0', padding: 0, listStyle: 'none', fontSize: 13.5, lineHeight: 1.7 }}>
                    {[
                      ['対象年齢', 'あかちゃん〜未就学児'],
                      ['通信', app.network],
                      ['価格', '無料'],
                    ].map(([k, v]) => (
                      <li key={k} style={{
                        display: 'flex', gap: 20, padding: '9px 0', borderBottom: `1px solid ${T.rule}`,
                      }}>
                        <span style={{ width: 92, color: T.mute, fontFamily: fontMono, fontSize: 11.5, letterSpacing: '.04em' }}>{k}</span>
                        <span style={{ color: T.ink, fontWeight: 500 }}>{v}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <PhoneTag soft={!app.live} />
                  <span style={{ fontSize: 12, color: T.mute, letterSpacing: '.02em' }}>
                    {app.live ? 'iOS（準備中）' : '準備中'}
                  </span>
                </div>

                {app.live && app.androidUrl && (
                  <a href={app.androidUrl} target="_blank" rel="noopener" style={{
                    marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '12px 20px', background: T.accent, color: T.paper,
                    textDecoration: 'none', fontSize: 13.5, fontWeight: 700,
                    letterSpacing: '.02em', borderRadius: 999, alignSelf: 'flex-start',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M8 5v14l11-7z"/>
                    </svg>
                    Google Playでダウンロード
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section style={{ padding: `${isMobile ? 52 : 76}px ${padX}px`, borderTop: `1px solid ${T.rule}` }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto', padding: isMobile ? '26px 24px' : '40px 48px',
          background: T.paperHi, border: `1px solid ${T.rule}`, borderRadius: 20,
          display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 22 : 32, flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: T.accentSoft, color: T.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2 L4 5 v6 c0 5 3.5 9 8 11 4.5-2 8-6 8-11 V5 z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none"/>
                <path d="M9 12 l2 2 l4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {eyebrow('Privacy First')}
              <h3 style={{
                margin: 0, fontFamily: fontRound, fontWeight: 700,
                fontSize: isMobile ? 19 : 22, lineHeight: 1.55,
              }}>個人情報を一切収集せず、外部にデータを送信しません。</h3>
            </div>
          </div>
          <a href="privacy/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 26px', background: T.accent, color: T.paper,
            textDecoration: 'none', fontSize: 14, fontWeight: 700,
            letterSpacing: '.04em', borderRadius: 999, whiteSpace: 'nowrap',
          }}>プライバシーポリシーを読む →</a>
        </div>
      </section>

      {/* FOOTER — equal-height logo plates so both align cleanly */}
      <footer style={{ borderTop: `1px solid ${T.rule}`, padding: `${isMobile ? 40 : 48}px ${padX}px` }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: isMobile ? 32 : 48,
          alignItems: 'flex-start',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {eyebrow('Made by')}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { key: 'atanpicBlack', alt: 'atanpic', href: 'https://atanpic.com', maxW: 150, maxH: 30 },
                { key: 'studiogorillaBlack', alt: 'studiogorilla★', href: 'https://studiogorillastar.com', maxW: 168, maxH: 52 },
              ].map((l) => (
                <a key={l.key} href={l.href} target="_blank" rel="noopener" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  height: 68, width: isMobile ? 'calc(50% - 8px)' : 196, minWidth: 150, padding: '0 24px',
                  background: T.paper, border: `1px solid ${T.rule}`, borderRadius: 14,
                  textDecoration: 'none',
                }}>
                  <img src={LOGOS[l.key]} alt={l.alt}
                    style={{ maxHeight: l.maxH, maxWidth: l.maxW, width: 'auto', height: 'auto', display: 'block', opacity: .9 }} />
                </a>
              ))}
            </div>
          </div>
          <div style={{
            textAlign: isMobile ? 'left' : 'right',
            display: 'flex', flexDirection: 'column', gap: 18,
            alignItems: isMobile ? 'flex-start' : 'flex-end',
          }}>
            {eyebrow('Contact')}
            <div>
              <a href={`mailto:${COPY.email}`} style={{
                fontSize: 15, color: T.ink, textDecoration: 'none', fontWeight: 500,
              }}>{COPY.email}</a>
              <div style={{ marginTop: 12, fontSize: 12, color: T.mute, letterSpacing: '.04em' }}>© 2026 PoYoYonLearning</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.VariationD = VariationD;
