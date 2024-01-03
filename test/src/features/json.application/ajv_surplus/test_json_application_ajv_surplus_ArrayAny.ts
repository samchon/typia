import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_json_application_ajv_surplus_ArrayAny =
  _test_json_application({ purpose: "ajv", surplus: true, name: "ArrayAny" })(
    typia.json.application<[ArrayAny], "ajv", true>(),
  );
