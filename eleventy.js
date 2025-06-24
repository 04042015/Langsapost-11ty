module.exports = (eleventyConfig) => {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy("admin")

  // Set up collections for articles
  eleventyConfig.addCollection("artikel", (collectionApi) => collectionApi.getFilteredByGlob("artikel/*.md").reverse())

  // Add date filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    if (!date) return ""
    return new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  })

  // Add excerpt filter
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return ""
    const text = content.replace(/<[^>]*>/g, "")
    return text.substring(0, 200) + "..."
  })

  // Add limit filter
  eleventyConfig.addFilter("limit", (array, limit) => {
    if (!Array.isArray(array)) return array
    return array.slice(0, limit)
  })

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
}
