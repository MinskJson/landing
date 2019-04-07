import Head from "next/head";
import {
  Header,
  TopSection,
  AboutSection,
  EventsSection,
  PartnersSection,
  TeamSection,
  Footer
} from "components";

export default () => (
  <>
    <style global="true" jsx="true">{`
      @import url(https://fonts.googleapis.com/css?family=Pacifico);

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      html,
      body {
        line-height: 1;
        height: 100%;
        font-family: Verdana;
        font-size: 14px;
        min-width: 320px;
        position: relative;
        overscroll-behavior: none;
      }
      ol,
      ul {
        list-style: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .container {
        position: relative;
        overflow: hidden;
      }
      .section {
        padding: 0 2rem;
        box-sizing: border-box;
        position: relative;
      }
    `}</style>
    <Head>
      <meta charSet="utf-8"/>
      <title>Сообщество Minsk JSON</title>

      <meta name="description" content="Сообщество любителей  передавать JSON" />
      <meta name="image" content="https://www.json.community/static/preview.png" />
      <meta itemprop="name" content="Сообщество Minsk JSON" />
      <meta itemprop="description" content="Сообщество любителей  передавать JSON" />
      <meta itemprop="image" content="https://www.json.community/static/preview.png" />
      <link rel="icon" type="image/png" href="https://www.json.community/static/favicon.jpg" />

      <meta name="og:title" content="Сообщество Minsk JSON" />
      <meta name="og:description" content="Сообщество любителей  передавать JSON" />
      <meta name="og:image" content="https://www.json.community/static/preview.png" />
      <meta name="og:url" content="https://www.json.community" />
      <meta name="og:site_name" content="{Minsk} JSON" />
      <meta name="og:locale" content="ru_RU" />
      <meta name="og:video" content="https://www.youtube.com/watch?v=lddJfBbNUn8" />
      <meta name="fb:admins" content="100002935665423" />
      <meta name="og:type" content="website" />
      <meta name="theme-color" content="#FFF" />
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <Header />
      <TopSection />
      {/* <EventsSection /> */}
      <AboutSection />
      <TeamSection />
      {/* <PartnersSection /> */}
      <Footer />
    </div>
  </>
);
