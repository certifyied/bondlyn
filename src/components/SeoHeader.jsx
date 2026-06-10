import { Helmet } from 'react-helmet-async';

export default function SeoHeader({ title, description }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Bondlyn` : 'Bondlyn'}</title>
      <meta name="description" content={description || "Bondlyn Child Development Centre - Every child has something extraordinary inside. We help it come out."} />
      {/* Additional common SEO meta tags can be added here */}
    </Helmet>
  );
}
