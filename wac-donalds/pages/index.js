import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Icon from "./components/icon/icon";
import Space from "./components/space/space";
import ProductCard from "./components/product-card/product-card";
import ProductMiniCard from "./components/product-mini-card/product-mini-card";
import LateralBar from "./components/bar/bar";
import ProductPayCard from "./components/product-pay-card/product-pay-card";

export default function Home() {
    const data = [
        {
            id: 1, name: "Combo Meal", promo: "20% off",
            price: 4.5, icon: "sandwich.svg", cat: "menu"
        },
        {
            id: 2, name: "Burgers & Sandiches", promo: null,
            price: 5, icon: "birthday-cake.svg", cat: "menu"
        },
        {
            id: 3, name: "Happy Meal", promo: null,
            price: 4.2, icon: "burger.svg", cat: "menu"
        },
        {
            id: 4, name: "Beverages", promo: null,
            price: 2, icon: "burger.svg", cat: "menu"
        },
        {
            id: 5, name: "Chicken", promo: null,
            price: 4, icon: "chicken-leg.svg", cat: "menu"
        },
        {
            id: 6, name: "Snack & Sides", promo: null,
            price: 4, icon: "chicken-leg.svg", cat: "menu"
        },
        {
            id: 7, name: "Big Meal", promo: "20% off",
            price: 4.5, icon: "burger.svg", cat: "product"
        },
        {
            id: 8, name: "Quarter Pounder", promo: null,
            price: 5, icon: "hot-dog.svg", cat: "product"
        },
        {
            id: 9, name: "Cheeseburger", promo: null,
            price: 4.2, icon: "pizza.svg", cat: "product"
        },
        {
            id: 10, name: "Crispy Chicken", promo: null,
            price: 2, icon: "chicken-leg.svg", cat: "menu"
        },
        {
            id: 11, name: "Sausage sausage", promo: null,
            price: 4, icon: "birthday-cake.svg", cat: "product"
        },
        {
            id: 12, name: "Filet-o-Fish", promo: null,
            price: 4, icon: "roast-chicken.svg", cat: "product"
        }
    ]
    const selected = [
        {
            id: 1, name: "Big Mac", price: 3.79, icon: "cheese-burger.svg"
        },
        {
            id: 2, name: "Filet-O-Fish", price: 3.79, icon: "burger.svg"
        },
        {
            id: 3, name: "Large Fries", price: 2.49, icon: "french-fries.svg"
        }
    ]

    return (
      <div>
          <Head>
              <title>Wac Donald's WebSite</title>
              <link rel="icon" href="/logo.png"/>
          </Head>
          <main className={styles.main}>
              <aside className={styles.side1}>
                  <div className={styles.start}>
                      <Icon size={50} src='/logo.png'></Icon>
                  </div>
                  <Space h={40}></Space>
                  <p className="title"><span>Hey,</span><br/>What's Up ?</p>
                  <Space h={20}></Space>
                  <div className="grid max-w max-h">
                      {data.map(function (i) {
                          if(i.cat==="menu"){
                              let t = 0
                              if (i.promo !== null) t = 1
                              return <ProductCard temp={t} item={i}></ProductCard>
                          }
                      })}
                  </div>
                  <Space h={20}></Space>
                  <p className="title"><span>Popular</span><br/></p>
                  <div className="grid-3 max-w max-h">
                      {data.map(function (i) {
                          if(i.cat==="product"){
                              return <ProductMiniCard item={i}></ProductMiniCard>
                          }
                      })}
                  </div>
              </aside>
              <aside className={styles.side2}>
                  <div className={styles.end}>
                      <Icon size={30} src='gabon.png'></Icon>
                  </div>
                  <Space h={50}></Space>
                  <p className="title"><span>My Order</span></p>
                  <p className="sub-title"><span>Take out</span></p>
                  <LateralBar></LateralBar>
                  <div className={styles.center}>
                      {selected.map(function (i) {
                          return <ProductPayCard item={i}></ProductPayCard>
                      })}
                  </div>
              </aside>
          </main>
      </div>
  );
}
