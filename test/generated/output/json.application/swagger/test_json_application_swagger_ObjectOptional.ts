import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";

export const test_json_application_swagger_ObjectOptional =
  _test_json_application("swagger")("ObjectOptional")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectOptional",
      },
    ],
    components: {
      schemas: {
        ObjectOptional: {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "string",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "string",
            },
            email: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "string",
            },
            sequence: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "number",
            },
          },
          nullable: false,
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
