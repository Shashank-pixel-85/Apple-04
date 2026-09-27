import React, { useState } from 'react';
import {
  Apple,
  ChevronDown,
  Play,
  X
} from 'lucide-react';
import { products } from './data/content';

const Button = ({ children, primary=false, dark=false, onClick }) => (
  <button className={`pill ${primary ? 'primary' : ''} ${dark ? 'dark' : ''}`} onClick={onClick}>
    {children}
  </button>
);

function GlobalNav() {
  const [open, setOpen] = useState(false);
  const items = ['Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home','Entertainment','Accessories','Support'];

  const chapterItems = [
    { name: 'iPhone 14 Pro', image: '/assets/iphone-14-pro-icon.png', badge: 'New' },
    { name: 'iPhone 14', image: '/assets/iphone-14-icon.png', badge: 'New' },
    { name: 'iPhone 13', image: '/assets/iphone-13-icon.png' },
    { name: 'iPhone SE', image: '/assets/iphone-se-icon.png' },
    { name: 'iPhone 12', image: '/assets/iphone-12-icon.png' },
    { name: 'Compare', image: '/assets/compare-icon.png' },
    { name: 'AirPods', image: '/assets/airpods-icon.png' },
    { name: 'AirTag', image: '/assets/airtag-icon.png' },
    { name: 'Accessories', image: '/assets/accessories-icon.png' },
    { name: 'Apple Card', image: '/assets/apple-card-icon.png' },
    { name: 'iOS 16', image: '/assets/ios-16-icon.png' },
    { name: 'Shop iPhone', image: '/assets/shop-iphone-icon.png' }
  ];

  return (
    <>
      <nav className="global-nav">
        <div className="nav-inner">
          <button className="icon-btn logo-btn" aria-label="Apple">
            <img src="/assets/apple-logo.png" alt="Apple" />
          </button>
          <div className={`nav-links ${open ? 'open' : ''}`}>
            {items.map(item => <a href={`#${item.toLowerCase().replaceAll(' ','-')}`} key={item}>{item}</a>)}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search"><img src="/assets/search-icon.png" alt="" /></button>
            <button className="icon-btn" aria-label="Shopping Bag"><img src="/assets/bag-icon.png" alt="" /></button>
            <button className="mobile-menu" onClick={() => setOpen(v => !v)}>{open ? <X/> : <ChevronDown/>}</button>
          </div>
        </div>
      </nav>

      <div className="chapter-nav">
        <div className="chapter-inner">
          <div className="chapter-links">
            {chapterItems.map((item, index) => (
              <a key={item.name} href={index === 0 ? '#hero' : '#compare'} className={item.name === 'iPhone 14' ? 'chapter-item active' : 'chapter-item'}>
                <span className="chapter-icon-wrap">
                  <img src={item.image} alt="" />
                  {item.badge && <small>{item.badge}</small>}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          <ChevronDown className="chapter-chevron"/>
        </div>
      </div>

      <div className="trade-banner">
Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
        <a href="#save">Shop iPhone</a>
      </div>
    </>
  );
}

function PhoneArt({ variant='yellow', pro=false, se=false }) {
  const colors = variant === 'yellow' ? ['#f5cf42','#f6d95e'] : variant === 'pro' ? ['#252525','#7862a5'] : ['#d6d9df','#c70d27'];
  return (
    <div className={`phone-art ${pro ? 'pro-art' : ''} ${se ? 'se-art' : ''}`}>
      <div className="phone-back" style={{background: `linear-gradient(145deg,${colors[0]},${colors[1]})`}}>
        <span className="camera-lens l1"></span><span className="camera-lens l2"></span><span className="camera-lens l3"></span>
        <Apple size={38} fill="white" className="phone-logo"/>
      </div>
      <div className="phone-front">
        <div className="dynamic-island"></div>
        <div className="screen-glow"></div>
        <div className="screen-clock">9:41</div>
      </div>
    </div>
  );
}

function Hero({ type = 'yellow' }) {
  const pro = type === 'pro';
  const se = type === 'se';

  const content = pro
    ? { eyebrow: '', name: 'iPhone 14 Pro', title: ['Pro.', 'Beyond.'], price: 'From $999 or $41.62/mo. for 24 mo. before trade-in' }
    : se
      ? { eyebrow: '', name: 'iPhone SE', title: ['Love the power.', 'Love the price.'], price: 'From $429 or $17.87/mo. for 24 mo. before trade-in²' }
      : { eyebrow: 'New', name: 'iPhone 14', title: ['Two great sizes.', 'Now with a splash of yellow.'], price: 'From $799 or $33.29/mo. for 24 mo. before trade‑in2' };

  return (
    <section id={pro ? 'pro' : se ? 'se' : 'hero'} className={`hero ${pro ? 'hero-pro' : ''} ${se ? 'hero-se' : ''}`}>
      <div className="hero-copy">
        {content.eyebrow && <span className="eyebrow">{content.eyebrow}</span>}
        <span className="product-name">{content.name}</span>
        <h1>{content.title[0]}<br />{content.title[1]}</h1>
        <p>{content.price}</p>
        <div className="hero-actions">
          <Button primary>Buy</Button>
          <a href="#compare">Learn more</a>
        </div>
      </div>

      <div className="hero-visual">
        {pro ? (
          <img
            className="hero-image pro-hero-image"
            src="/assets/iphone-14-pro-hero.png"
            alt="iPhone 14 Pro"
          />
        ) : se ? (
          <img
            className="hero-image se-hero-image"
            src="/assets/iphone-se-hero.png"
            alt="iPhone SE"
          />
        ) : (
          <img className="hero-image" src="/assets/iphone-14-hero.png" alt="iPhone 14 models in different colours" />
        )}
      </div>
    </section>
  );
}

function GuidedTour() {
  return (
    <section className="guided section-pad">
      <div className="guided-art">
        <img
          src="/assets/guided-tour.png"
          alt="A Guided Tour of iPhone 14 and iPhone 14 Pro"
        />

        <div className="guided-copy">
          <p>A Guided Tour of</p>
          <h2>iPhone 14 &<br />iPhone 14 Pro</h2>
          <Button>
            Watch the film
            <Play size={13} fill="currentColor" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const compareImages = {
  'iPhone 14 Pro': '/assets/compare-iphone-14-pro.png',
  'iPhone 14': '/assets/compare-iphone-14.png',
  'iPhone 13': '/assets/compare-iphone-13.png',
  'iPhone SE': '/assets/compare-iphone-se.png'
};

const comparisonSpecs = [
  [
    ['6.7" or 6.1"', 'Super Retina XDR display³', 'ProMotion technology', 'Always-On display'],
    ['6.7" or 6.1"', 'Super Retina XDR display³', '-', '-'],
    ['6.1" or 5.4"', 'Super Retina XDR display³', '-', '-'],
    ['4.7"', 'Retina HD display', '-', '-']
  ],
  [
    { icon: 'dynamic-island.png', lines: ['Dynamic Island', 'A new way to', 'interact with iPhone'] },
    '-',
    '-',
    '-'
  ],
  [
    { icon: 'emergency-sos.png', lines: ['Emergency SOS via satellite⁴', 'Emergency SOS', 'Crash Detection⁵'] },
    { icon: 'emergency-sos.png', lines: ['Emergency SOS via satellite⁴', 'Emergency SOS', 'Crash Detection⁵'] },
    { icon: 'emergency-sos.png', lines: ['-', 'Emergency SOS', '-'] },
    { icon: 'emergency-sos.png', lines: ['-', 'Emergency SOS', '-'] }
  ],
  [
    { icon: 'pro-camera-system.png', lines: ['Pro camera system', '48MP Main | Ultra Wide', 'Telephoto', 'Photonic Engine for incredible', 'detail and color', 'Autofocus on TrueDepth', 'front camera'] },
    { icon: 'advanced-dual-camera-system.png', lines: ['Advanced dual-camera system', '12MP Main | Ultra Wide', '-', 'Photonic Engine for incredible', 'detail and color', 'Autofocus on TrueDepth', 'front camera'] },
    { icon: 'dual-camera-system.png', lines: ['Dual-camera system', '12MP Main | Ultra Wide', '-', '-', 'TrueDepth front camera'] },
    { icon: 'advanced-dual-camera-system.png', lines: ['Advanced camera system', '12MP Main', '-', '-', 'Front camera'] }
  ],
  [
    { icon: 'action-mode.png', lines: ['Action mode smooths out shaky', 'handheld videos'] },
    { icon: 'action-mode.png', lines: ['Action mode smooths out shaky', 'handheld videos'] },
    '-',
    '-'
  ],
  [
    { icon: 'battery.png', lines: ['Up to 29 hours', 'video playback⁶'] },
    { icon: 'battery.png', lines: ['Up to 26 hours', 'video playback⁶'] },
    { icon: 'battery.png', lines: ['Up to 19 hours', 'video playback⁶'] },
    { icon: 'battery.png', lines: ['Up to 15 hours', 'video playback⁶'] }
  ],
  [
    { icon: 'a16-bionic-chip.png', lines: ['A16 Bionic chip'] },
    { icon: 'a15-bionic-chip.png', lines: ['A15 Bionic chip', 'with 5-core GPU'] },
    { icon: 'a15-bionic-chip.png', lines: ['A15 Bionic chip', 'with 4-core GPU'] },
    { icon: 'a15-bionic-chip.png', lines: ['A15 Bionic chip', 'with 4-core GPU'] }
  ],
  [
    { icon: 'face-id.png', lines: ['Face ID'] },
    { icon: 'face-id.png', lines: ['Face ID'] },
    { icon: 'face-id.png', lines: ['Face ID'] },
    { icon: 'touch-id.png', lines: ['Touch ID'] }
  ],
  [
    { icon: '5g.png', lines: ['Superfast 5G cellular⁷'] },
    { icon: '5g.png', lines: ['Superfast 5G cellular⁷'] },
    { icon: '5g.png', lines: ['Superfast 5G cellular⁷'] },
    { icon: '5g.png', lines: ['5G cellular⁷'] }
  ]
];

function ComparisonCell({ cell }) {
  if (cell === '-') {
    return <span className="spec-dash">-</span>;
  }

  const lines = Array.isArray(cell) ? cell : cell.lines;

  return (
    <div className="spec-content">
      {!Array.isArray(cell) && cell.icon && (
        <img
          className="spec-icon"
          src={`/assets/${cell.icon}`}
          alt=""
        />
      )}

      {lines.map((line, index) => (
        <span
          className={line === '-' ? 'spec-dash' : index === 0 ? 'spec-primary' : 'spec-line'}
          key={`${line}-${index}`}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

function Compare() {
  const [active, setActive] = useState('iPhone 14 Pro');

  return (
    <section id="compare" className="compare section-pad">
      <h2 className="section-title">Which iPhone is right for you?</h2>

      <div className="compare-tabs">
        {products.map(p => (
          <button
            className={active === p.name ? 'active' : ''}
            key={p.name}
            onClick={() => setActive(p.name)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {products.map(p => (
          <article
            className={`product-card ${active === p.name ? 'selected' : ''}`}
            key={p.name}
          >
            <div className="compare-product-image">
              <img src={compareImages[p.name]} alt={p.name} />
            </div>

            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

            {p.new && <small className="orange">New</small>}

            <h3>{p.name}</h3>
            <p>{p.tagline}</p>
            <strong>{p.price}</strong>

            <div>
              <Button primary>Buy</Button>
            </div>

            <a href="#compare">Learn more</a>
          </article>
        ))}
      </div>

      <div className="comparison-specs">
        <div className="spec-top-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {comparisonSpecs.map((row, rowIndex) => (
          <div className={`spec-row spec-row-${rowIndex}`} key={rowIndex}>
            {row.map((cell, index) => (
              <div className="spec-value" key={index}>
                <ComparisonCell cell={cell} />
              </div>
            ))}
          </div>
        ))}

        <div className="spec-bottom-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="compare-bottom">
        <a href="#compare">Compare all iPhone models</a>
        <a href="#save">Shop iPhone</a>
      </div>
    </section>
  );
}

function SaveSection() {
  return (
    <section id="save" className="save">
      <h2 className="section-title">Ways to save on iPhone</h2>

      <div className="save-grid">

        <div className="save-main card-light">
          <div className="save-main-copy">
            <h3>
              Trade in your current phone<br />
              for credit toward a new one.
            </h3>

            <p>
              Get $200–$600 in credit when you trade in iPhone 11 or higher
              and upgrade to iPhone 14 or iPhone 14 Pro. 1
            </p>

            <a href="#">Learn more</a>
          </div>

          <img
            className="trade-in-image"
            src="/assets/trade-in-hero.png"
            alt="Trade in iPhone"
          />
        </div>

        <div className="save-two">

          <div className="small-card carrier-card">
            <div className="small-card-copy">
              <h3>
                Save up to $800 with select<br />
                carrier deals at Apple.
              </h3>

              <p>
                Get the carrier deals you love and save on a new iPhone when
                you trade in and purchase right here at Apple.
              </p>

              <a href="#">Find your deal</a>
            </div>

            <div className="carrier-logos">
              <img src="/assets/att.png" alt="AT&T" />
              <img src="/assets/t-mobile.png" alt="T-Mobile" />
              <img src="/assets/verizon.png" alt="Verizon" />
            </div>
          </div>

          <div className="small-card apple-card-save">
            <div className="small-card-copy">
              <h3>
                Get 3% Daily Cash<br />
                back with Apple Card.
              </h3>

              <p>
                And pay for your new iPhone over 24 months, interest-free when
                you choose to check out with Apple Card Monthly Installments. 2
              </p>

              <a href="#">Learn more</a>
            </div>

            <img
              className="apple-card-image"
              src="/assets/apple-card.png"
              alt="Apple Card and iPhone"
            />
          </div>

        </div>

        <div className="best-place card-light">
          <img
            className="why-apple-image"
            src="/assets/why-apple-buy-iphone.png"
            alt="Why Apple is the best place to buy iPhone"
          />
        </div>

      </div>
    </section>
  );
}

function Accessories() {
  return (
    <section className="accessories section-pad">
      <h2 className="section-title">Featured accessories</h2>

      <div className="accessory-stack">
        <article className="accessory-feature accessory-magsafe">
          <div className="accessory-copy">
            <h3>MagSafe</h3>
            <p>
              Snap on a magnetic case, wallet, or both. And get faster wireless charging.
            </p>
            <a href="#">Shop MagSafe accessories</a>
          </div>
          <div className="accessory-art">
            <img src="/assets/magsafe.png" alt="MagSafe accessories" />
          </div>
        </article>

        <article className="accessory-feature accessory-airtag">
          <div className="accessory-art">
            <img src="/assets/airtag.png" alt="AirTag accessories" />
          </div>
          <div className="accessory-copy">
            <h3>AirTag</h3>
            <p>
              Attach one to your keys. Put another in your backpack. If they’re misplaced,
              just use the Find My app.
            </p>
            <div className="accessory-links">
              <a href="#">Buy</a>
              <a href="#">Learn more</a>
            </div>
          </div>
        </article>

        <article className="accessory-feature accessory-audio">
          <div className="accessory-copy">
            <h3>Magic runs<br />in the family.</h3>
          </div>
          <div className="accessory-art">
            <img src="/assets/airpods-family.png" alt="AirPods and AirPods Max" />
          </div>
        </article>
      </div>

      <a className="accessory-shop-link" href="#">
        Shop all iPhone accessories
      </a>
    </section>
  );
}

function Benefits() {
  const data = [
    {
      image: '/assets/fast-free-delivery.png',
      title: 'Fast, free delivery',
      body: 'Or pick up available items at an Apple Store.'
    },
    {
      image: '/assets/pay-monthly.png',
      title: 'Pay monthly at 0% APR',
      body: 'Pay over time when you choose to check out with Apple Card.'
    },
    {
      image: '/assets/help-buying.png',
      title: 'Get help buying',
      body: 'Have a question? Call a Specialist or chat online.'
    }
  ];

  return (
    <section className="benefits section-pad">
      {data.map(item => (
        <div key={item.title}>
          <img className="benefit-icon" src={item.image} alt="" />
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          <a href="#">Learn more</a>
        </div>
      ))}
    </section>
  );
}

function FeatureStory() {
  return (
    <section className="features section-pad">
      <h2 className="section-title">What makes an iPhone an iPhone?</h2>

      <div className="feature-image-card ios-feature-card">
        <img
          src="/assets/ios-16.png"
          alt="iOS 16 on iPhone"
        />
      </div>

      <div className="feature-image-card switch-feature-card">
        <img
          src="/assets/switching-to-iphone.png"
          alt="Switching to iPhone is super simple"
        />
      </div>
    </section>
  );
}

function Services() {
  const serviceCards = [
    {
      logo: '/assets/tv-plus-logo.png',
      content: '/assets/tv-plus-content.png',
      title: 'TV+',
      body: 'Get 3 months of Apple TV+ free when you buy an iPhone.',
      action: 'Try it free'
    },
    {
      logo: '/assets/music-logo.png',
      content: '/assets/music-content.png',
      title: 'Music',
      body: 'Get over 100 million songs. Start listening now.',
      action: 'Try it free'
    },
    {
      logo: '/assets/news-plus-logo.png',
      content: '/assets/news-plus-content.jpg',
      title: 'News+',
      body: 'Get 3 months of Apple News+ free.',
      action: 'Learn more'
    },
    {
      logo: null,
      content: '/assets/arcade-content.jpg',
      title: 'Arcade',
      body: 'Get 3 months of Apple Arcade free when you buy an iPhone.',
      action: 'Try it free'
    },
    {
      logo: '/assets/fitness-plus-logo.png',
      content: '/assets/fitness-plus-content.png',
      title: 'Fitness+',
      body: 'Fitness for everyone. Now all you need is iPhone.',
      action: 'Try it free'
    },
    {
      logo: '/assets/gift-card-logo.png',
      content: '/assets/gift-card-content.png',
      title: 'Gift Card',
      body: 'For everything and everyone.',
      action: 'Buy'
    }
  ];

  return (
    <section className="services section-pad">
      <h2 className="section-title">Get more out of your iPhone.</h2>

      <div className="apple-one-card">
        <div className="apple-one-art">
          <img src="/assets/apple-one-icons.png" alt="Apple services" />
        </div>

        <div className="apple-one-copy">
          <img className="apple-one-logo" src="/assets/apple-one-logo.png" alt="Apple One" />
          <p>Bundle up to six Apple services. And enjoy more for less.</p>
          <div className="service-links">
            <a href="#">Try it free</a>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>

      <div className="service-grid">
        {serviceCards.map(card => (
          <article className="service-card" key={card.title}>
            <div className="service-card-copy">
              {card.logo ? (
                <img className="service-logo" src={card.logo} alt={card.title} />
              ) : (
                <h3>{card.title}</h3>
              )}
              <p>{card.body}</p>
              <a href="#">{card.action}</a>
            </div>

            <div className="service-card-art">
              <img src={card.content} alt="" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="research">
      <div className="research-inner">
        <div className="research-copy">
          <h2>Introducing<br />the Apple<br />Research app.</h2>
          <p>The future of health research is you.</p>
          <a href="#">Learn more</a>
        </div>

        <div className="research-art">
          <img
            src="/assets/research-app.png"
            alt="Apple Research app on three iPhones"
          />
        </div>
      </div>
    </section>
  );
}

function LegalFooter() {
  const [open, setOpen] = useState(null);

  const cols = [
    {
      title: 'Shop and Learn',
      items: ['Store','Mac','iPad','iPhone','Watch','AirPods','TV & Home','AirTag','Accessories','Gift Cards']
    },
    {
      title: 'Account',
      items: ['Manage Your Apple ID','Apple Store Account','iCloud.com'],
      groups: [
        ['Entertainment','Apple One','Apple TV+','Apple Music','Apple Arcade','Apple Fitness+','Apple News+','Apple Podcasts','Apple Books','App Store'],
        ['Apple Wallet','Wallet','Apple Card','Apple Pay','Apple Cash']
      ]
    },
    {
      title: 'Apple Store',
      items: ['Find a Store','Genius Bar','Today at Apple','Apple Camp','Apple Store App','Certified Refurbished','Apple Trade In','Financing','Carrier Deals at Apple','Order Status','Shopping Help']
    },
    {
      title: 'For Business',
      groups: [
        ['','Apple and Business','Shop for Business'],
        ['For Education','Apple and Education','Shop for K-12','Shop for College'],
        ['For Healthcare','Apple in Healthcare','Health on Apple Watch','Health Records on iPhone'],
        ['For Government','Shop for Government','Shop for Veterans and Military']
      ]
    },
    {
      title: 'Apple Values',
      groups: [
        ['','Accessibility','Education','Environment','Inclusion and Diversity','Privacy','Racial Equity and Justice','Supplier Responsibility'],
        ['About Apple','Newsroom','Apple Leadership','Career Opportunities','Investors','Ethics & Compliance','Events','Contact Apple']
      ]
    }
  ];

  const legalParagraphs = [
  '* Pricing includes a $30 connectivity discount that requires activation with AT&T, T-Mobile, or Verizon.',

  '** Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only in the U.S. to select at checkout for certain Apple products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE and is subject to credit approval and credit limit. See support.apple.com/kb/HT211204 for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 15.99% to 26.49% based on creditworthiness. Rates as of March 1, 2023. If you choose the pay-in-full or one-time-payment option for an ACMI-eligible purchase instead of choosing the ACMI payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs; or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Verizon, or T-Mobile.',

  'To access and use all features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.',

  'Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.',

  'Available for qualifying applicants in the United States.',

  'Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.',

  'If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.',

  'Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.',

  'Pricing for iPhone 14 and iPhone 14 Plus includes a $30 connectivity discount that requires activation with AT&T, T-Mobile, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&T, T-Mobile, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement. Additional iPhone Payments terms apply.',

  'The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches (iPhone 13 mini, iPhone 12 mini), 5.85 inches (iPhone 11 Pro, iPhone XS, iPhone X), 6.06 inches (iPhone 14, iPhone 13 Pro, iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 6.12 inches (iPhone 14 Pro), 6.46 inches (iPhone 11 Pro Max, iPhone XS Max), 6.68 inches (iPhone 14 Plus, iPhone 13 Pro Max, iPhone 12 Pro Max), or 6.69 inches (iPhone 14 Pro Max) diagonally. Actual viewable area is less.',

  'Service is included for free for two years with the activation of any iPhone 14 model. Connection and response times vary based on location, site conditions, and other factors. See apple.com/iphone-14 or apple.com/iphone-14-pro for more information.',

  'iPhone 14 and iPhone 14 Pro can detect a severe car crash and call for help. Requires a cellular connection or Wi-Fi calling.',

  'All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings. See apple.com/batteries and apple.com/iphone/battery.html for more information.',

  'Data plan required. 5G is available in select markets and through select carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/iphone/cellular.',

  'AT&T iPhone 14 Special Deal: Monthly price reflects net monthly payment, after application of AT&T trade-in credit applied over 36 months with purchase of an iPhone 14 Pro, iPhone 14 Pro Max, iPhone 14, or iPhone 14 Plus and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 14, iPhone 14 Plus, iPhone 14 Pro, or iPhone 14 Pro Max of either $800 or $350 (based upon the model and condition of your trade-in smartphone), max bill credits will not exceed the cost of the device. Requires upgrade of an existing line or activation of a new line and purchase of a new iPhone 14, iPhone 14 Plus, iPhone 14 Pro, or iPhone 14 Pro Max on qualifying 36 month 0% APR installment plan, subject to carrier credit qualification. AT&T Installment Plan with Next Up is not eligible for this promotion. $0 down for well qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. Requires activation on eligible unlimited plan. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Trade-in device may not be on existing installment plan. Bill credits are applied as a monthly credit over the 36 month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one trade-in per qualifying purchase and one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Price for iPhone 14 and iPhone 14 Plus includes $30 AT&T connectivity discount. Activation required.',

  'AT&T iPhone 13 Special Deal: Buy an iPhone 13 128 GB and get $370 in bill credits applied over 36 months. Buy an iPhone 13 256 GB and get $290 in bill credits applied over 36 months. Buy an iPhone 13 512 GB and get $310 in bill credits applied over 36 months. Requires upgrade of an existing line (or activation of a new line) and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Bill credits are applied as a monthly credit over the 36-month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Activation required.',

  'AT&T iPhone SE Special Deal: Buy an iPhone SE 64 GB and get $250 in bill credits applied over 36 months. Buy an iPhone SE 128 GB and get $120 in bill credits applied over 36 months. Buy an iPhone SE 256 GB and get $40 in bill credits applied over 36 months. Requires upgrade of an existing line (or activation of a new line) and purchase on qualifying 36-month 0% APR installment plan, subject to carrier credit qualification. $0 down for well-qualified customers only, or down payment may be required and depends on a variety of factors. Tax on full retail price due at sale. If you cancel eligible wireless service, credits will stop and you will owe the remaining device balance. Activation/Upgrade Fee: $35. Bill credits are applied as a monthly credit over the 36-month installment plan. Credits start within 3 bills. Will receive catch-up credits once credits start. Wireless line must be on an installment agreement, active, and in good standing for 30 days to qualify. Installment agreement starts when device is shipped. To get all credits, device must remain on agreement for entire term and you must keep eligible service on device for entire installment term. Limited-time offer; subject to change. Limits: one credit per line. May not be combinable with other offers, discounts, or credits. Purchase, financing, other limits, and restrictions apply. Activation required.',

  'T-Mobile iPhone 14 Special Deal: Monthly price reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone 14 Pro, iPhone 14 Pro Max, iPhone 14, or iPhone 14 Plus and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 14, iPhone 14 Plus, iPhone 14 Pro, or iPhone 14 Pro Max of $400 or $200 (based upon the model and condition of your trade-in smartphone) for customers on any eligible rate plan. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Customer must remain in the T-Mobile Equipment Installment Program and on eligible rate plan for 24 months and remain in good standing to receive the full benefit of the bill credits; allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer, subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone 14 and iPhone 14 Plus includes $30 T-Mobile connectivity discount. Activation required.',

  'T-Mobile iPhone 13 Special Deal: Monthly price reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone 13 or iPhone 13 mini and trade-in of eligible smartphone. Receive credit with purchase of an iPhone 13 or iPhone 13 mini of $400 or $200 (based upon the model and condition of your trade-in smartphone) for customers on any eligible rate plan. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple connectivity trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Customer must remain in the T-Mobile Equipment Installment Program and on eligible rate plan for 24 months and remain in good standing to receive the full benefit of the bill credits; allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone 13 and iPhone 13 mini includes $30 T-Mobile connectivity discount. Activation required.',

  'T-Mobile iPhone SE 3 Special Deal: Monthly price reflects net monthly payment, after application of T-Mobile trade-in credit applied over 24 months with purchase of an iPhone SE 3 and trade-in of eligible smartphone. Receive credit with purchase of an iPhone SE 3 of $400 or $200 (based upon the model and condition of your trade-in smartphone) for customers on any eligible rate plan. Max bill credits will not exceed the cost of the device. Credit comprised of (i) Apple connectivity trade-in credit at checkout and (ii) T-Mobile monthly bill credits applied over 24 months. Customer must remain in the T-Mobile Equipment Installment Program and on eligible rate plan for 24 months and remain in good standing to receive the full benefit of the bill credits; allow 2 bill cycles from valid submission and validation of trade-in. Tax on pre-credit price due at sale. Limited-time offer; subject to change. Qualifying credit, data plan, and trade-in in good condition required. Max 4 promotional offers on any iPhone per account. May not be combinable with some offers or discounts. Price for iPhone SE 3 includes $30 T-Mobile connectivity discount. Activation required.',

  'Verizon iPhone 14 Special Deal: Monthly price reflects net monthly payment, after application of Verizon trade-in credit applied over 36 months with purchase of an iPhone 14 Pro, iPhone 14 Pro Max, iPhone 14, or iPhone 14 Plus with credit of $800 or $400 for customers on a Get More or One Unlimited plan (based upon the model and condition of your trade-in smartphone); or $440 or $220 for customers on a Do More or Play More plan (based upon the model and condition of your trade-in smartphone). Credit comprised of (i) Apple instant trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 36 months. Customer must remain in the Verizon Device Payment Program for 36 months to receive the full benefit of the Verizon bill credits. Bill credits may take 1–2 bill cycles to appear. If it takes two cycles for bill credits to appear, you’ll see the credit for the first cycle in addition to that month’s credit. Requires purchase and activation of a new iPhone 14, iPhone 14 Plus, iPhone 14 Pro, or iPhone 14 Pro Max with the Verizon Device Payment Program at 0% APR for 36 months, subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer, subject to change. Additional terms from Apple, Verizon, and Apple’s trade-in partners may apply. Price for iPhone 14 and iPhone 14 Plus includes $30 Verizon connectivity discount. Activation required.',

  'Verizon iPhone 13 Special Deal: Monthly price reflects net monthly payment, after application of Verizon trade-in credit applied over 36 months with purchase of an iPhone 13 or iPhone 13 mini with credit of $600 or $300 for customers on a Do More, Play More, Get More, or One Unlimited plan (based upon the model and condition of your trade-in smartphone). Credit comprised of (i) Apple connectivity trade-in credit at checkout and (ii) Verizon monthly bill credits applied over 36 months. Customer must remain in the Verizon Device Payment Program for 36 months to receive the full benefit of the Verizon bill credits. Bill credits may take 1–2 bill cycles to appear. If it takes two cycles for bill credits to appear, you’ll see the credit for the first cycle in addition to that month’s credit. Requires purchase and activation of a new iPhone 13 mini or iPhone 13 with the Verizon Device Payment Program at 0% APR for 36 months, subject to carrier credit qualification, and iPhone availability and limits. Taxes and shipping not included in monthly price. Sales tax may be assessed on full value of new iPhone. Requires eligible unlimited service plan. Requires trade-in of eligible device in eligible condition. Must be at least 18 to trade-in. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason. In-store trade-in requires presentation of a valid, government-issued photo ID (local law may require saving this information). In-store promotion availability subject to local law; speak to a Specialist to learn more. Limited-time offer, subject to change. Additional terms from Apple, Verizon, and Apple’s trade-in partners may apply. Price for iPhone 13 and iPhone 13 mini includes $30 Verizon connectivity discount. Activation required.',

  'The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.',

  '$6.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.',

  'New subscribers only. $10.99/month after free trial. Plan automatically renews after trial until cancelled.',

  'Offer available to new subscribers who purchase an eligible device on or after September 7, 2022. $9.99/month after trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. Offer good for 3 months after eligible device activation, from December 12, 2022. Plan automatically renews until cancelled. Restrictions and other terms apply.',

  '$4.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.',

  'Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. Terms apply.'
];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="legal-copy">
          {legalParagraphs.map((text, index) => <p key={index}>{text}</p>)}
        </div>

        <div className="footer-crumb">
          <img className="footer-apple-mark" src="/assets/apple-logo.png" alt="Apple" />
          <span className="footer-crumb-chevron">›</span>
          <span>iPhone</span>
        </div>

        <div className="footer-cols">
          {cols.map((col, i) => (
            <div className="footer-col" key={col.title}>
              <button onClick={() => setOpen(open === i ? null : i)}>
                <span>{col.title}</span>
                <ChevronDown />
              </button>

              <div className={open === i ? 'expanded' : ''}>
                {col.items?.map(item => <a href="#" key={item}>{item}</a>)}
                {col.groups?.map((group, groupIndex) => (
                  <div className="footer-subgroup" key={`${col.title}-${groupIndex}`}>
                    {group[0] && <strong>{group[0]}</strong>}
                    {group.slice(1).map(item => <a href="#" key={item}>{item}</a>)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-store-line">
          More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        <div className="footer-bottom">
          <span>Copyright © 2023 Apple Inc. All rights reserved.</span>
          <span>Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms of Use&nbsp;&nbsp; | &nbsp;&nbsp;Sales and Refunds&nbsp;&nbsp; | &nbsp;&nbsp;Legal&nbsp;&nbsp; | &nbsp;&nbsp;Site Map</span>
          <span>United States</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return <div><GlobalNav/><main><Hero/><Hero type="pro"/><Hero type="se"/><GuidedTour/><Compare/><SaveSection/><Accessories/><Benefits/><FeatureStory/><Services/><Research/></main><LegalFooter/></div>;
}