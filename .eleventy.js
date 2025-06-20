const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Format tanggal filter
  eleventyConfig.addFilter("date", (dateObj, format = "dd LLL yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
