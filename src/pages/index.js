import React from 'react'
import Layout from '../components/layout'
import FeaturedProjects from '../components/featuredProjects'
import Button from '../components/button'
import featuredProjects from '../data/featuredProjects'

import styles from './index.module.css'
import githubIcon from '../images/logo-github.svg'

const IndexPage = () => (
  <Layout>
    <div className={styles.landingBg}>
      <div className={styles.landingBgCornerTop} />
      <div className={styles.landingBgCornerBottom} />
      <div className={styles.landingBgMask}>
        <div className={styles.landingBgAstronaut} />
      </div>
    </div>
    <section className={styles.heroSection}>
      <div>
        <h1 className={styles.heroSectionCall}>Addicted Developers</h1>
        <h2 className={styles.heroSectionSubCall}>Unidos pelo código.</h2>
        <a
          className={styles.heroSectionLink}
          href="https://github.com/globocom/opensource"
        >
          Let's code
        </a>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Nossos projetos</h2>
        <FeaturedProjects projects={featuredProjects} />
        <Button
          url="https://github.com/globocom/opensource"
          className={styles.sectionButton}
          label="ver todos"
          icon={githubIcon}
        />
      </div>
    </section>
    <section className={styles.sectionBottom}>
      <div className={styles.sectionBottomContent}>
        <div className={styles.sectionBottomData}>
          <div className={styles.sectionBottomTitle}>Trabalhe conosco</div>
          <div className={styles.sectionBottomSubTitle}>
            Você nasceu pra isso!
          </div>
          <div className={styles.sectionBottomLink}>
            <Button
              url="https://github.com/globocom/opensource"
              className={styles.sectionButton}
              label="participe"
              transparent={true}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
