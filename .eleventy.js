const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Tambahkan filter tanggal
  eleventyConfig.addFilter("date", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Tambahkan koleksi artikel dari folder artikel/
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./artikel/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
