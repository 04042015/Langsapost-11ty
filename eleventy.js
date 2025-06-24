module.exports = (eleventyConfig) => {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy("admin")

  // Set up collections for articles
  eleventyConfig.addCollection("artikel", (collectionApi) => collectionApi.getFilteredByGlob("artikel/*.md").reverse())

  // Collections untuk setiap kategori
  eleventyConfig.addCollection("healthy", (collectionApi) =>
    collectionApi.getFilteredByGlob("artikel/*.md").filter((item) => item.data.kategori === "Healthy"),
  )

  eleventyConfig.addCollection("internasional", (collectionApi) =>
    collectionApi.getFilteredByGlob("artikel/*.md").filter((item) => item.data.kategori === "Internasional"),
  )

  eleventyConfig.addCollection("loker", (collectionApi) =>
    collectionApi.getFilteredByGlob("artikel/*.md").filter((item) => item.data.kategori === "Loker"),
  )

  eleventyConfig.addCollection("nasional", (collectionApi) =>
    collectionApi.getFilteredByGlob("artikel/*.md").filter((item) => item.data.kategori === "Nasional"),
  )

  eleventyConfig.addCollection("sport", (collectionApi) =>
    collectionApi.getFilteredByGlob("artikel/*.md").filter((item) => item.data.kategori === "Sport"),
  )

  eleventyConfig.addCollection("zodiak", (collectionApi) =>
    collectionApi.getFilteredByGlob("artikel/*.md").filter((item) => item.data.kategori === "Zodiak"),
  )

  // Add date filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    if (!date) return ""
    return new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  })

  // Add date filter for ISO format
  eleventyConfig.addFilter("date", (date, format) => {
    if (!date) return ""
    const d = new Date(date)
    if (format === "YYYY-MM-DD") {
      return d.toISOString().split("T")[0]
    }
    return d.toISOString()
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

  // Filter by category
  eleventyConfig.addFilter("filterByCategory", (articles, category) => {
    if (!Array.isArray(articles)) return []
    return articles.filter((article) => article.data.kategori === category)
  })

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
}
