import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plum en todas partes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nuestro sistema perdura en el tiempo; los documentos importantes en la programacion no se
        han perdido en el olvido, sino que están accesibles en todo momento y lugar.
      </>
    ),
  },
  {
    title: 'Diseño intuitivo y fácil uso',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        En Plum, hemos priorizado la experiencia del <code>usuario</code>. Con un diseño
        intuitivo y una interfaz totalmente fácil de usar, encontrarás lo que necesitas en cuestion de segundos.
      </>
    ),
  },
  {
    title: 'Documentos que seguro buscabas',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ¿Cansado de búsquedas interminables? En Plum, hemos recopilado los documentos
        que seguro estás buscando justo ahora, facilitando así tu trabajo y optimizando tu tiempo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
