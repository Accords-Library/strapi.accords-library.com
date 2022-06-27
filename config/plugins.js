module.exports = {
  meilisearch: {
    config: {
      "weapon-story": {
	indexName: "nested-weapon-story",
        populateEntryRule: ["stories.translations", "translations"],
      }
    }
  },
}
