module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.addFilter("readableDate", dateObj => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateObj).toLocaleDateString("id-ID", options);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
