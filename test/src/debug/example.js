import typia from "typia";

const app = {
  model: "chatgpt",
  options: {
    reference: false,
    separate: null,
  },
  functions: [
    {
      name: "create",
      parameters: {
        type: "object",
        properties: {
          input: {
            description:
              "Information of the article to create.\n\n------------------------------\n\nDescription of the current {@link IBbsArticle.ICreate} type:\n\n> Information of the article to create.\n\n------------------------------\n\nDescription of the parent {@link IBbsArticle} type:\n\n> Article entity.\n> \n> `IBbsArticle` is an entity representing an article in the BBS (Bulletin Board System).",
            type: "object",
            properties: {
              title: {
                title: "Title of the article",
                description:
                  "Title of the article.\n\nRepresentative title of the article.",
                type: "string",
              },
              body: {
                title: "Content body",
                description:
                  "Content body.\n\nContent body of the article writtn in the markdown format.",
                type: "string",
              },
              thumbnail: {
                title: "Thumbnail image URI",
                description:
                  "Thumbnail image URI.\n\nThumbnail image URI which can represent the article.\n\nIf configured as `null`, it means that no thumbnail image in the article.",
                anyOf: [
                  {
                    type: "null",
                  },
                  {
                    type: "string",
                    description: "@format uri\n@contentMediaType image/*",
                  },
                ],
              },
            },
            required: ["title", "body", "thumbnail"],
            additionalProperties: false,
          },
        },
        required: ["input"],
        additionalProperties: false,
        $defs: {},
      },
      output: {
        description:
          "Article entity.\n\n`IBbsArticle` is an entity representing an article in the BBS (Bulletin Board System).",
        type: "object",
        properties: {
          id: {
            title: "Primary Key",
            description: "Primary Key.\n\n\n@format uuid",
            type: "string",
          },
          created_at: {
            title: "Creation time of the article",
            description: "Creation time of the article.\n\n\n@format date-time",
            type: "string",
          },
          updated_at: {
            title: "Last updated time of the article",
            description:
              "Last updated time of the article.\n\n\n@format date-time",
            type: "string",
          },
          title: {
            title: "Title of the article",
            description:
              "Title of the article.\n\nRepresentative title of the article.",
            type: "string",
          },
          body: {
            title: "Content body",
            description:
              "Content body.\n\nContent body of the article writtn in the markdown format.",
            type: "string",
          },
          thumbnail: {
            title: "Thumbnail image URI",
            description:
              "Thumbnail image URI.\n\nThumbnail image URI which can represent the article.\n\nIf configured as `null`, it means that no thumbnail image in the article.",
            anyOf: [
              {
                type: "null",
              },
              {
                type: "string",
                description: "@format uri\n@contentMediaType image/*",
              },
            ],
          },
        },
        required: [
          "id",
          "created_at",
          "updated_at",
          "title",
          "body",
          "thumbnail",
        ],
        additionalProperties: false,
      },
      description:
        "Create a new article.\n\nWrites a new article and archives it into the DB.",
      strict: true,
    },
    {
      name: "update",
      parameters: {
        type: "object",
        properties: {
          id: {
            title: "Target article's {@link IBbsArticle.id}",
            description:
              "Target article's {@link IBbsArticle.id}.\n\n\n@format uuid",
            type: "string",
          },
          input: {
            description:
              "Make all properties in T optional\n\n------------------------------\n\nDescription of the current {@link PartialIBbsArticle.ICreate} type:\n\n> Make all properties in T optional",
            type: "object",
            properties: {
              title: {
                title: "Title of the article",
                description:
                  "Title of the article.\n\nRepresentative title of the article.",
                type: "string",
              },
              body: {
                title: "Content body",
                description:
                  "Content body.\n\nContent body of the article writtn in the markdown format.",
                type: "string",
              },
              thumbnail: {
                title: "Thumbnail image URI",
                description:
                  "Thumbnail image URI.\n\nThumbnail image URI which can represent the article.\n\nIf configured as `null`, it means that no thumbnail image in the article.",
                anyOf: [
                  {
                    type: "null",
                  },
                  {
                    type: "string",
                    description: "@format uri\n@contentMediaType image/*",
                  },
                ],
              },
            },
            required: ["title", "body", "thumbnail"],
            additionalProperties: false,
          },
        },
        required: ["id", "input"],
        additionalProperties: false,
        $defs: {},
      },
      description: "Update an article.\n\nUpdates an article with new content.",
      strict: true,
    },
    {
      name: "erase",
      parameters: {
        type: "object",
        properties: {
          id: {
            title: "Target article's {@link IBbsArticle.id}",
            description:
              "Target article's {@link IBbsArticle.id}.\n\n\n@format uuid",
            type: "string",
          },
        },
        required: ["id"],
        additionalProperties: false,
        $defs: {},
      },
      description: "Erase an article.\n\nErases an article from the DB.",
      strict: true,
    },
  ],
};
console.log(app);
