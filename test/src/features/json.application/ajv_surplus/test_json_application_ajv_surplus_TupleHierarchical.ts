import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_application_ajv_surplus_TupleHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TupleHierarchical",
  })(typia.json.application<[TupleHierarchical], "ajv", true>());
