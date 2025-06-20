const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Tambahkan filter tanggal
  eleventyConfig.addFilter("date", (value, format = "dd LLLL yyyy") => {
    return DateTime.fromJSDate(new Date(value), { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
