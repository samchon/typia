import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../../structures/ObjectGenericAlias";

export const test_json_application_swagger_ObjectGenericAlias =
  _test_json_application("swagger")("ObjectGenericAlias")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGenericAlias.Alias",
      },
    ],
    components: {
      schemas: {
        "ObjectGenericAlias.Alias": {
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
