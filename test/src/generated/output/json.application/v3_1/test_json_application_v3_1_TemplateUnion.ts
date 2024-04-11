import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateUnion } from "../../../../structures/TemplateUnion";

export const test_json_application_v3_1_TemplateUnion = _test_json_application({
  version: "3.1",
  name: "TemplateUnion",
})({
  version: "3.1",
  components: {
    schemas: {
      TemplateUnion: {
        $ref: "#/components/schemas/TemplateUnion",
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TemplateUnion",
    },
  ],
});
