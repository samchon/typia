import typia from "typia";
import { DynamicTemplate } from "../../../../structures/DynamicTemplate";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_DynamicTemplate =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicTemplate",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicTemplate",
      },
    ],
    components: {
      schemas: {
        DynamicTemplate: {
          type: "object",
          properties: {},
          nullable: false,
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
