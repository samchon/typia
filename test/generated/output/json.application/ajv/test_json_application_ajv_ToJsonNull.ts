import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonNull } from "../../../../structures/ToJsonNull";

export const test_json_application_ajv_ToJsonNull = _test_json_application(
  "ajv",
)("ToJsonNull")({
  schemas: [
    {
      type: "null",
    },
  ],
  components: {
    schemas: {},
  },
  purpose: "ajv",
});
