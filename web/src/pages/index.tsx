import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): React.ReactElement {
  return (
    <Layout title="Docs" description="Helm chart documentation for common-chart">
      <header className="heroBanner">
        <div className="container">
          <h1 className="heroTitle">common-chart</h1>
          <p className="heroSubtitle">
            A docs UI for the Helm charts in this repository. Start with{' '}
            <Link to="/component-chart/introduction">component-chart</Link>, and we’ll add more doc
            sets (like loki-stack) over time.
          </p>
          <div className="margin-top--md">
            <Link className="button button--primary button--lg" to="/component-chart/introduction">
              Open component-chart docs
            </Link>
          </div>
        </div>
      </header>

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

