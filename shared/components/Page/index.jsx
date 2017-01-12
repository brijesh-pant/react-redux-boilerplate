import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './Page.scss'

const Header = () => {
  return (
    <div>
      <div className={styles.useAutoPrefixer}>
        <div className={`${styles['box']} ${styles['box1']}`}>1</div>
        <div className={`${styles['box']} ${styles['box2']}`}>2</div>
        <div className={`${styles['box']} ${styles['box3']}`}>3</div>
        <div className={`${styles['box']} ${styles['box4']}`}>4</div>
      </div>
      <h1>Isomorphic React Redux</h1>
      <Link to='/login'>GoTo Home</Link>
      <hr />
    </div>
  )
}

const GrailLayout = ({children}) => {
  return (
    <div className={styles.holyGrail}>
      <Header />
      <div className={styles.grailBody}>
        <main className={styles.content}>{children}</main>
        <nav className={styles.leftSidebar}>…</nav>
        <aside className={styles.rightSidebar}>…</aside>
      </div>
      <footer>…</footer>
    </div>
  )
}
GrailLayout.propTypes = {
  children: PropTypes.node,
}

const Page = ({children}) => {
  return (
    <GrailLayout children={children} />
  )
}
Page.propTypes = {
  children: PropTypes.node,
}

export default Page
