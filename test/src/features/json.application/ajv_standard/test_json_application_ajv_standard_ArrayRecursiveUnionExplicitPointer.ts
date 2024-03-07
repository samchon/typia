import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.json.application<
      [ArrayRecursiveUnionExplicitPointer],
      "ajv",
      false
    >(),
  );
