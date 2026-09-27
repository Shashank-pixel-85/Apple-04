import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const assets = {
  appleLogo: require('../../assets/apple-logo.png'),
  search: require('../../assets/search-icon.png'),
  bag: require('../../assets/bag-icon.png'),

  iphone14Hero: require('../../assets/iphone-14-hero.png'),
  iphone14ProHero: require('../../assets/iphone-14-pro-hero.png'),
  iphoneSEHero: require('../../assets/iphone-se-hero.png'),
  guidedTour: require('../../assets/guided-tour.png'),

  compare14Pro: require('../../assets/compare-iphone-14-pro.png'),
  compare14: require('../../assets/compare-iphone-14.png'),
  compare13: require('../../assets/compare-iphone-13.png'),
  compareSE: require('../../assets/compare-iphone-se.png'),

  tradeIn: require('../../assets/trade-in-hero.png'),
  appleCard: require('../../assets/apple-card.png'),
  whyApple: require('../../assets/why-apple-buy-iphone.png'),

  magsafe: require('../../assets/magsafe.png'),
  airtag: require('../../assets/airtag.png'),
  airpods: require('../../assets/airpods-family.png'),

  ios16: require('../../assets/ios-16.png'),
  switching: require('../../assets/switching-to-iphone.png'),

  appleOneIcons: require('../../assets/apple-one-icons.png'),
  appleOneLogo: require('../../assets/apple-one-logo.png'),
  tvContent: require('../../assets/tv-plus-content.png'),
  musicContent: require('../../assets/music-content.png'),
  newsContent: require('../../assets/news-plus-content.jpg'),
  arcadeContent: require('../../assets/arcade-content.jpg'),
  fitnessContent: require('../../assets/fitness-plus-content.png'),
  giftContent: require('../../assets/gift-card-content.png'),

  research: require('../../assets/research-app.png')
};

const products = [
  {
    name: 'iPhone 14 Pro',
    price: 'From $999',
    tag: 'The ultimate iPhone.',
    image: assets.compare14Pro
  },
  {
    name: 'iPhone 14',
    price: 'From $799',
    tag: 'A total powerhouse.',
    image: assets.compare14
  },
  {
    name: 'iPhone 13',
    price: 'From $599',
    tag: 'As amazing as ever.',
    image: assets.compare13
  },
  {
    name: 'iPhone SE',
    price: 'From $429',
    tag: 'Serious power. Serious value.',
    image: assets.compareSE
  }
];

const serviceCards = [
  { name: 'TV+', image: assets.tvContent },
  { name: 'Music', image: assets.musicContent },
  { name: 'News+', image: assets.newsContent },
  { name: 'Arcade', image: assets.arcadeContent },
  { name: 'Fitness+', image: assets.fitnessContent },
  { name: 'Gift Card', image: assets.giftContent }
];

function SectionTitle({ children }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.nav}>
        <Image source={assets.appleLogo} style={styles.appleLogo} />
        <Text style={styles.navTitle}>iPhone</Text>

        <View style={styles.navActions}>
          <Image source={assets.search} style={styles.navIcon} />
          <Image source={assets.bag} style={styles.navIcon} />
          <Pressable onPress={() => setOpen(!open)} style={styles.menuButton}>
            <Ionicons name={open ? 'close' : 'menu'} size={21} color="#111" />
          </Pressable>
        </View>
      </View>

      {open && (
        <View style={styles.menu}>
          {['iPhone 14 Pro', 'iPhone 14', 'iPhone 13', 'iPhone SE', 'Compare', 'Accessories'].map(item => (
            <Text style={styles.menuItem} key={item}>{item}</Text>
          ))}
        </View>
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chapterNav}
        contentContainerStyle={styles.chapterContent}
      >
        {['iPhone 14 Pro', 'iPhone 14', 'iPhone 13', 'iPhone SE', 'Compare', 'Accessories'].map((item, index) => (
          <Text style={[styles.chapterItem, index === 1 && styles.chapterActive]} key={item}>
            {item}
          </Text>
        ))}
      </ScrollView>

      <View style={styles.tradeBanner}>
        <Text style={styles.tradeText}>
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
        </Text>
        <Text style={styles.link}>Shop iPhone</Text>
      </View>
    </>
  );
}

function Hero({ type }) {
  const isPro = type === 'pro';
  const isSE = type === 'se';

  const title = isPro
    ? 'Pro. Beyond.'
    : isSE
      ? 'Love the power. Love the price.'
      : 'Two great sizes. Now with a splash of yellow.';

  const price = isPro
    ? 'From $999 or $41.62/mo. for 24 mo. before trade-in'
    : isSE
      ? 'From $429 or $17.87/mo. for 24 mo. before trade-in²'
      : 'From $799 or $33.29/mo. for 24 mo. before trade-in²';

  const image = isPro
    ? assets.iphone14ProHero
    : isSE
      ? assets.iphoneSEHero
      : assets.iphone14Hero;

  return (
    <View style={[styles.hero, isPro && styles.proHero, isSE && styles.seHero]}>
      <Text style={[styles.productName, isPro && styles.whiteText]}>
        {isPro ? 'iPhone 14 Pro' : isSE ? 'iPhone SE' : 'New iPhone 14'}
      </Text>

      <Text style={[styles.heroTitle, isPro && styles.whiteText]}>
        {title}
      </Text>

      <Text style={[styles.heroPrice, isPro && styles.whiteText]}>
        {price}
      </Text>

      <View style={styles.heroActions}>
        <Pressable style={styles.buyButton}>
          <Text style={styles.buyText}>Buy</Text>
        </Pressable>
        <Text style={styles.link}>Learn more</Text>
      </View>

      <Image
        source={image}
        style={[
          styles.heroImage,
          isPro && styles.proHeroImage,
          isSE && styles.seHeroImage
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

function GuidedTour() {
  return (
    <View style={styles.section}>
      <View style={styles.guidedCard}>
        <Image source={assets.guidedTour} style={styles.guidedImage} resizeMode="cover" />
        <View style={styles.guidedOverlay}>
          <Text style={styles.guidedSmall}>A Guided Tour of</Text>
          <Text style={styles.guidedTitle}>iPhone 14 &{'\n'}iPhone 14 Pro</Text>
          <Pressable style={styles.watchButton}>
            <Ionicons name="play" size={13} color="#111" />
            <Text style={styles.watchText}>Watch the film</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function Compare() {
  return (
    <View style={styles.section}>
      <SectionTitle>Which iPhone is right for you?</SectionTitle>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map(product => (
          <View style={styles.productCard} key={product.name}>
            <Image source={product.image} style={styles.productImage} resizeMode="contain" />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productTag}>{product.tag}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Pressable style={styles.smallBuy}>
              <Text style={styles.buyText}>Buy</Text>
            </Pressable>
            <Text style={styles.link}>Learn more</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.specBox}>
        {[
          '6.7" or 6.1" display',
          'Emergency SOS',
          'Pro camera system',
          'Up to 29 hours video playback',
          'A16 / A15 Bionic chip',
          'Face ID',
          'Superfast 5G cellular'
        ].map(item => (
          <View style={styles.specRow} key={item}>
            <Text style={styles.specTitle}>{item}</Text>
            <Text style={styles.specText}>iPhone 14 Pro • iPhone 14 • iPhone 13 • SE</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function SaveSection() {
  return (
    <View style={styles.greySection}>
      <SectionTitle>Ways to save on iPhone</SectionTitle>

      <View style={styles.imageCard}>
        <Image source={assets.tradeIn} style={styles.wideImage} resizeMode="contain" />
      </View>

      <View style={styles.imageCard}>
        <Image source={assets.appleCard} style={styles.wideImage} resizeMode="contain" />
      </View>

      <View style={styles.imageCard}>
        <Image source={assets.whyApple} style={styles.wideImage} resizeMode="contain" />
      </View>
    </View>
  );
}

function Accessories() {
  return (
    <View style={styles.greySection}>
      <SectionTitle>Featured accessories</SectionTitle>

      <View style={styles.imageCard}>
        <Image source={assets.magsafe} style={styles.accessoryImage} resizeMode="contain" />
      </View>

      <View style={styles.imageCard}>
        <Image source={assets.airtag} style={styles.accessoryImage} resizeMode="contain" />
      </View>

      <View style={styles.imageCard}>
        <Image source={assets.airpods} style={styles.accessoryImage} resizeMode="contain" />
      </View>
    </View>
  );
}

function Features() {
  return (
    <View style={styles.greySection}>
      <SectionTitle>What makes an iPhone an iPhone?</SectionTitle>

      <View style={styles.imageCard}>
        <Image source={assets.ios16} style={styles.featureImage} resizeMode="contain" />
      </View>

      <View style={styles.smallFeatureCard}>
        <Image source={assets.switching} style={styles.featureImage} resizeMode="contain" />
      </View>
    </View>
  );
}

function Services() {
  return (
    <View style={styles.greySection}>
      <SectionTitle>Get more out of your iPhone.</SectionTitle>

      <View style={styles.appleOneCard}>
        <Image source={assets.appleOneIcons} style={styles.appleOneImage} resizeMode="contain" />
        <Image source={assets.appleOneLogo} style={styles.appleOneLogo} resizeMode="contain" />
        <Text style={styles.bodyText}>
          Bundle up to six Apple services. And enjoy more for less.
        </Text>
        <Text style={styles.link}>Try it free</Text>
      </View>

      <View style={styles.serviceGrid}>
        {serviceCards.map(service => (
          <View style={styles.serviceCard} key={service.name}>
            <Text style={styles.serviceTitle}>{service.name}</Text>
            <Text style={styles.bodyText}>Enjoy more of what you love with iPhone.</Text>
            <Text style={styles.link}>Learn more</Text>
            <Image source={service.image} style={styles.serviceImage} resizeMode="contain" />
          </View>
        ))}
      </View>
    </View>
  );
}

function Research() {
  return (
    <View style={styles.research}>
      <Image source={assets.research} style={styles.researchImage} resizeMode="contain" />
    </View>
  );
}

function Footer() {
  const [open, setOpen] = useState(null);

  const columns = [
    ['Shop and Learn', 'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'Accessories'],
    ['Account', 'Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
    ['Apple Store', 'Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Trade In'],
    ['For Business', 'Apple and Business', 'Shop for Business', 'For Education'],
    ['Apple Values', 'Accessibility', 'Education', 'Environment', 'Privacy']
  ];

  return (
    <View style={styles.footer}>
      <Text style={styles.legal}>
        Pricing and availability vary. Trade-in values depend on condition and configuration. Terms and conditions apply.
      </Text>

      {columns.map((column, index) => (
        <View style={styles.footerColumn} key={column[0]}>
          <Pressable
            style={styles.footerHead}
            onPress={() => setOpen(open === index ? null : index)}
          >
            <Text style={styles.footerTitle}>{column[0]}</Text>
            <Ionicons
              name={open === index ? 'chevron-up' : 'chevron-down'}
              size={16}
              color="#555"
            />
          </Pressable>

          {open === index && column.slice(1).map(item => (
            <Text style={styles.footerLink} key={item}>{item}</Text>
          ))}
        </View>
      ))}

      <Text style={styles.moreWays}>
        More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.
      </Text>

      <Text style={styles.copy}>
        Copyright © 2023 Apple Inc. All rights reserved.
      </Text>
    </View>
  );
}

export default function Apple04Screen() {
  return (
    <ScrollView style={styles.root}>
      <Header />
      <Hero type="yellow" />
      <Hero type="pro" />
      <Hero type="se" />
      <GuidedTour />
      <Compare />
      <SaveSection />
      <Accessories />
      <Features />
      <Services />
      <Research />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },

  nav: {
    height: 52,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },

  appleLogo: {
    width: 16,
    height: 24,
    resizeMode: 'contain'
  },

  navTitle: {
    fontSize: 16,
    fontWeight: '600'
  },

  navActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14
  },

  navIcon: {
    width: 15,
    height: 24,
    resizeMode: 'contain'
  },

  menuButton: {
    padding: 2
  },

  menu: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },

  menuItem: {
    fontSize: 15,
    paddingVertical: 8,
    color: '#333'
  },

  chapterNav: {
    maxHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },

  chapterContent: {
    paddingHorizontal: 18,
    alignItems: 'center'
  },

  chapterItem: {
    fontSize: 12,
    color: '#666',
    marginRight: 22,
    paddingVertical: 15
  },

  chapterActive: {
    color: '#111',
    fontWeight: '600'
  },

  tradeBanner: {
    backgroundColor: '#f5f5f7',
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: 'center'
  },

  tradeText: {
    fontSize: 10,
    color: '#444',
    textAlign: 'center',
    lineHeight: 14
  },

  link: {
    color: '#06c',
    fontSize: 13
  },

  hero: {
    minHeight: 600,
    alignItems: 'center',
    paddingTop: 44,
    overflow: 'hidden'
  },

  proHero: {
    backgroundColor: '#000'
  },

  seHero: {
    backgroundColor: '#f5f5f7'
  },

  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1d1d1f'
  },

  whiteText: {
    color: '#fff'
  },

  heroTitle: {
    width: width - 40,
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    color: '#1d1d1f',
    letterSpacing: -0.7
  },

  heroPrice: {
    width: width - 45,
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginTop: 13
  },

  heroActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 15
  },

  buyButton: {
    backgroundColor: '#0071e3',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 18
  },

  buyText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600'
  },

  heroImage: {
    width: width - 28,
    height: 350,
    marginTop: 25
  },

  proHeroImage: {
    height: 250
  },

  seHeroImage: {
    height: 430
  },

  section: {
    padding: 32
  },

  greySection: {
    backgroundColor: '#f5f5f7',
    padding: 32
  },

  sectionTitle: {
    fontSize: 29,
    lineHeight: 33,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1d1d1f',
    marginBottom: 25,
    letterSpacing: -0.8
  },

  guidedCard: {
    height: 390,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#416b89',
    position: 'relative'
  },

  guidedImage: {
    width: '100%',
    height: '100%'
  },

  guidedOverlay: {
    position: 'absolute',
    left: 20,
    bottom: 24
  },

  guidedSmall: {
    color: '#fff',
    fontSize: 13
  },

  guidedTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 28,
    marginTop: 5
  },

  watchButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 12
  },

  watchText: {
    color: '#111',
    fontSize: 12
  },

  productCard: {
    width: 190,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 12,
    marginRight: 12
  },

  productImage: {
    width: 150,
    height: 220
  },

  productName: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    color: '#1d1d1f'
  },

  productTag: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
    height: 30
  },

  productPrice: {
    fontSize: 12,
    fontWeight: '600',
    marginVertical: 12
  },

  smallBuy: {
    backgroundColor: '#0071e3',
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 16,
    marginBottom: 8
  },

  specBox: {
    marginTop: 22,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },

  specRow: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5'
  },

  specTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#222'
  },

  specText: {
    fontSize: 10,
    color: '#777',
    marginTop: 4
  },

  imageCard: {
    backgroundColor: '#fff',
    marginBottom: 8,
    overflow: 'hidden'
  },

  wideImage: {
    width: '100%',
    height: 220
  },

  accessoryImage: {
    width: '100%',
    height: 230
  },

  smallFeatureCard: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 8,
    overflow: 'hidden'
  },

  featureImage: {
    width: '100%',
    height: 245
  },

  appleOneCard: {
    backgroundColor: '#fff',
    padding: 22,
    alignItems: 'center',
    marginBottom: 8
  },

  appleOneImage: {
    width: '100%',
    height: 150
  },

  appleOneLogo: {
    width: 170,
    height: 55,
    marginTop: 2
  },

  bodyText: {
    color: '#555',
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10
  },

  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  serviceCard: {
    width: '49%',
    minHeight: 270,
    backgroundColor: '#fff',
    marginBottom: 8,
    paddingTop: 18,
    alignItems: 'center',
    overflow: 'hidden'
  },

  serviceTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1d1d1f'
  },

  serviceImage: {
    width: '100%',
    height: 150,
    marginTop: 8
  },

  research: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20
  },

  researchImage: {
    width: width,
    height: 230
  },

  footer: {
    backgroundColor: '#f5f5f7',
    padding: 20
  },

  legal: {
    color: '#777',
    fontSize: 10,
    lineHeight: 15,
    marginBottom: 15
  },

  footerColumn: {
    borderTopWidth: 1,
    borderTopColor: '#d5d5d7'
  },

  footerHead: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  footerTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333'
  },

  footerLink: {
    color: '#666',
    fontSize: 12,
    paddingBottom: 10
  },

  moreWays: {
    color: '#666',
    fontSize: 11,
    lineHeight: 17,
    paddingVertical: 16
  },

  copy: {
    borderTopWidth: 1,
    borderTopColor: '#d5d5d7',
    paddingTop: 15,
    color: '#777',
    fontSize: 10
  }
});
