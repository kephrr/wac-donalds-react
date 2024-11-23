import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Icon from "./components/icon/icon";
import Space from "./components/space/space";
import ProductCard from "./components/product-card/product-card";

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
                  <Space h={20}></Space>
                  <p className="title"> <span>Hey,</span><br/>What's Up ?</p>
                  <div className="grid">
                        <ProductCard temp={true}></ProductCard>
                      <ProductCard temp={false}></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                  </div>
              </aside>
              <aside className={styles.side2}>

              </aside>
          </main>
      </div>
  );
}
