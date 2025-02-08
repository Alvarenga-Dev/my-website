import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image, keywords, author }) => {
  return (
    <Head>
      {/* Título e descrição */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords || 'default, keywords, for, seo'} />
      <meta name="author" content={author || 'Your Name or Company'} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Foto do Lucas Alvarenga, Desenvolvedor Android" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Descrição da imagem para Twitter" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Tema e acessibilidade */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  );
};

export default SEO;