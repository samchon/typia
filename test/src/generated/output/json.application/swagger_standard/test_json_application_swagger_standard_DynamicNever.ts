import typia from "typia";
import { DynamicNever } from "../../../../structures/DynamicNever";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_DynamicNever =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicNever",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/DynamicNever",
      },
    ],
    components: {
      schemas: {
        DynamicNever: {
          type: "object",
          properties: {},
          nullable: false,
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
