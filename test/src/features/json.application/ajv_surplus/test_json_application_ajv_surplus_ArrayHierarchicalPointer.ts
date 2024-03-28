import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_application_ajv_surplus_ArrayHierarchicalPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayHierarchicalPointer",
  })(typia.json.application<[ArrayHierarchicalPointer], "ajv", true>());
