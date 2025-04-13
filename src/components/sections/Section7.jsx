import React from 'react'
import styles from './Sections.module.scss'

const Section7 = ({item}) => {
  return (
    <div>
          <section className={styles.section6} id="about">
                <div className={styles.image}>
                <img src={item.image} alt={item.title} />
                </div>  
                <div className={styles.about}>
                  <h1>About Us</h1>
                  <p>{item.description}</p>
                  <br /><br />
                  <p>{item.title}</p>
        
                  <p className={styles.price}>Price: ${item.price}</p>
                  <br />
                  <div className={styles.btns}>
                    <button className={styles.btn}>View details</button>
                    <button>Add to cart</button>
                  </div>
        
                </div>
              </section>
    </div>
  )
}

export default Section7