module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addCollection("artikel", function(collectionApi) {
    return collectionApi.getFilteredByGlob("artikel/*.md").sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("kategori", function(collectionApi) {
    const map = {};
    collectionApi.getFilteredByGlob("artikel/*.md").forEach(item => {
      const cat = item.data.category;
      if (!map[cat]) map[cat] = [];
      map[cat].push(item);
    });
    return map;
  });
  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};