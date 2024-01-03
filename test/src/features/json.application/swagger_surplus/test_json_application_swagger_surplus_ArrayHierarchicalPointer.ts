import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_application_swagger_surplus_ArrayHierarchicalPointer =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayHierarchicalPointer",
  })(typia.json.application<[ArrayHierarchicalPointer], "swagger", true>());
