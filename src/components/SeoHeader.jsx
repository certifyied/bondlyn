import { Helmet } from 'react-helmet-async';

export default function SeoHeader({ title, description }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Our App` : 'Our App'}</title>
      <meta name="description" content={description || "Welcome to our website"} />
      {/* Additional common SEO meta tags can be added here */}
    </Helmet>
  );
}
