import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft" }>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>joaoxavieroprofissional@gmail.com</li>
          <li>(11)97387-9194</li>
          <li>Rua Beibe beibe do biruleibe, 1</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
