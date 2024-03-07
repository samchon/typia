import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.json.application<[ArrayRecursiveUnionExplicitPointer], "ajv", true>(),
  );
