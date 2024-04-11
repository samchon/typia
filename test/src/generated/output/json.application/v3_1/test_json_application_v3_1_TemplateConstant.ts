import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateConstant } from "../../../../structures/TemplateConstant";

export const test_json_application_v3_1_TemplateConstant =
  _test_json_application({
    version: "3.1",
    name: "TemplateConstant",
  })({
    version: "3.1",
    components: {
      schemas: {
        TemplateConstant: {
          $ref: "#/components/schemas/TemplateConstant",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TemplateConstant",
      },
    ],
  });
