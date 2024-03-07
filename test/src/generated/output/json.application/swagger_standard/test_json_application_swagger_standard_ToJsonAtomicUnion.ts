import typia from "typia";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ToJsonAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonAtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonAtomicUnion",
      },
    ],
    components: {
      schemas: {
        ToJsonAtomicUnion: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "string",
                nullable: true,
              },
              {
                type: "number",
                nullable: true,
              },
              {
                type: "boolean",
                nullable: true,
              },
            ],
          },
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
