import typia from "typia";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ArrayHierarchicalPointer =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayHierarchicalPointer",
  })(typia.json.application<[ArrayHierarchicalPointer], "swagger", true>());
