import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_application_ajv_surplus_ArrayUnion =
  _test_json_application({ purpose: "ajv", surplus: true, name: "ArrayUnion" })(
    typia.json.application<[ArrayUnion], "ajv", true>(),
  );
