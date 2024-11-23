import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Icon from "./components/icon/icon";
import Space from "./components/space/space";
import ProductCard from "./components/product-card/product-card";
import ProductMiniCard from "./components/product-mini-card/product-mini-card";
import LateralBar from "./components/bar/bar";
import ProductPayCard from "./components/product-pay-card/product-pay-card";

export default function Home() {
  return (
      <div>
          <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico"/>
          </Head>
          <main className={styles.main}>
              <aside className={styles.side1}>
                  <div className={styles.start}>
                      <Icon size={50} src='./icons/burger.svg'></Icon>
                  </div>
                  <Space h={40}></Space>
                  <p className="title"><span>Hey,</span><br/>What's Up ?</p>
                  <Space h={20}></Space>
                  <div className="grid o-y">
                      <ProductCard temp={1}></ProductCard>
                      <ProductCard temp={0}></ProductCard>
                      <ProductCard></ProductCard>
                      <ProductCard></ProductCard>
                  </div>
                  <Space h={20}></Space>
                  <p className="title"><span>Popular</span><br/></p>
                  <div className="grid-3">
                      <ProductMiniCard></ProductMiniCard>
                      <ProductMiniCard></ProductMiniCard>
                      <ProductMiniCard></ProductMiniCard>
                      <ProductMiniCard></ProductMiniCard>
                  </div>
              </aside>
              <aside className={styles.side2}>
                  <div className={styles.end}>
                      <Icon size={30} src='./icons/burger.svg'></Icon>
                  </div>
                  <Space h={50}></Space>
                  <p className="title"><span>My Order</span></p>
                  <p className="sub-title"><span>Take out</span></p>
                  <LateralBar></LateralBar>
                  <Space h={10}></Space>
                  <ProductPayCard></ProductPayCard>
              </aside>
          </main>
      </div>
  );
}
