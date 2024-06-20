import typia, { IJsonApplication, tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1112_template_literal_with_type_tag = (): void => {
  validate(typia.json.application<[Something], "3.0">());
  validate(typia.json.application<[Something], "3.1">());
};

const validate = (app: IJsonApplication<"3.0"> | IJsonApplication<"3.1">) => {
  const properties = (app.components.schemas!.Something as any).properties;
  TestValidator.equals("properties")({
    pure: {
      type: "string",
      pattern:
        "^(([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\/[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)|((.*)\\x2d(.*)))",
    },
    sole: {
      "0": {
        type: "string",
        pattern:
          "([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\/[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)",
        "x-typia-sole": true,
      },
    },
    union: {
      oneOf: [
        [
          {
            type: "string",
            pattern:
              "([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\/[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)",
            "x-typia-something": true,
          },
        ],
        [
          {
            type: "string",
            pattern: "((.*)\\x2d(.*))",
            "x-typia-nothing": false,
          },
        ],
      ],
    },
    mixed: {
      oneOf: [
        {
          type: "string",
          pattern:
            "^(([+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\/[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)|((.*)\\x2d(.*)))",
        },
        [
          {
            type: "string",
            pattern: "((.*)\\|\\|[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)",
            "x-typia-something": true,
          },
        ],
      ],
    },
  })(properties);
};

interface Something {
  pure: `${number}/${number}` | `${string}-${string}`;
  sole: `${number}/${number}` & tags.JsonSchemaPlugin<{ "x-typia-sole": true }>;
  union:
    | (`${number}/${number}` &
        tags.JsonSchemaPlugin<{ "x-typia-something": true }>)
    | (`${string}-${string}` &
        tags.JsonSchemaPlugin<{ "x-typia-nothing": false }>);
  mixed:
    | `${number}/${number}`
    | `${string}-${string}`
    | (`${string}||${number}` &
        tags.JsonSchemaPlugin<{ "x-typia-something": true }>);
}
