import style from "./FromPrice.module.css";

function FromPrice({item}) {
  return (
    <p className={style.priceCtn}>à partir de <span className={style.price}>{item.price}€</span></p>
  )
}

export default FromPrice;