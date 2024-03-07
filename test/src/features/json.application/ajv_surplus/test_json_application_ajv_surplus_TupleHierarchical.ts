import typia from "typia";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_TupleHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TupleHierarchical",
  })(typia.json.application<[TupleHierarchical], "ajv", true>());
