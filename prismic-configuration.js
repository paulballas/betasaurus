exports.Configuration = {

  apiEndpoint: 'https://betasaurus-comics.cdn.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function(doc, ctx) {
    if (doc.type == 'blog') {
      return '/blog';
    }
    if (doc.type == 'post') {
      return '/' + encodeURIComponent(doc.uid);
    }

    return '/';
  },
  onPrismicError: function(err, req, res) {
    res.status(500)
      .send("Error 500: " + err.message);
  }

};
