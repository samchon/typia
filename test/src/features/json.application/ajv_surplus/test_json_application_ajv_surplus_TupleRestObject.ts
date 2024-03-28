import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_application_ajv_surplus_TupleRestObject =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TupleRestObject",
  })(typia.json.application<[TupleRestObject], "ajv", true>());
