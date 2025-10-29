import preview from "@public/favicons/card.png";

const getConfig = (): any => {
  const domain: any = process.env.DOMAIN;

  return {
    title: {
      default: "The LACC Inc",
      template: `%s | The LACC Inc`,
    },
    description: `The LACC Inc - landing page about company which provides remodeling services.`,
    openGraph: {
      type: "website",
      images: [{ url: preview.src, alt: "Preview Image" }],
      title: `The LACC Inc`,
      description: `The LACC Inc - landing page about company which provides remodeling services.`,
      locale: "en",
      url: "localhost",
      siteName: "The LACC Inc",
    },
    manifest: "/favicons/manifest.json",
    twitter: {
      card: "summary_large_image",
    },
    metadataBase: new URL(domain),
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
    },
  };
};

export default getConfig;