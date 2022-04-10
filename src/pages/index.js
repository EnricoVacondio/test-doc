/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const configurations = [
  {
    title: 'Eslint',
    imageUrl: 'img/eslint.webp',
    description: null,
  },
  {
    title: 'Prettier',
    imageUrl: 'img/prettier.jpeg',
    description: null,
  },
  { 
    title: 'Husky',
    imageUrl: 'img/husky.webp',
    description: null,
  }
];

const services = [
  {
    title: 'Logger',
    imageUrl: 'img/log.jpg',
    description: null,
  }
]

function Feature({imageUrl, title}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4 overflow-hidden object-center shadow-lg opacity-1 rounded-lg image-max-sizes custom-card mt-4 mb-4">
      <img className="w-full h-full object-fill object-center" src={imgUrl} alt={title} />
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx(styles.heroBanner)}>
        <div className="container text-center mx-auto  pt-12 pb-20">
          <h1 className="hero__title font-black">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={clsx('mt-12')}>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/intro')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {configurations && configurations.length > 0 && (
          <section className={clsx('container mx-auto text-center pb-5 mt-12')}>
            <h4 className='hero__subtitle font-bold mt-12 mb-12 self-start'>Configurations</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 place-items-center">
                {configurations.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
            </div>
          </section>
        )}

        {services && services.length > 0 && (
          <section className="container mx-auto text-center pb-5 mt-12">
            <h4 className='hero__subtitle font-bold mt-12 mb-12 self-start'>Services</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 place-items-center">
                {services.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
            </div>
          </section>
        )}
      </main>
      <div className='background-logo-faded'>
            <img alt="Novalab logo" src="img/novalab_logo.png" className="background-logo-faded-image opacity-40" />
        </div>
    </Layout>
  );
}
