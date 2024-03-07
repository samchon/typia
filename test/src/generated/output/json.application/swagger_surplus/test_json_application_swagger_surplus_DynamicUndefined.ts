import typia from "typia";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_DynamicUndefined =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicUndefined",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicUndefined",
      },
    ],
    components: {
      schemas: {
        DynamicUndefined: {
          type: "object",
          properties: {},
          nullable: false,
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
