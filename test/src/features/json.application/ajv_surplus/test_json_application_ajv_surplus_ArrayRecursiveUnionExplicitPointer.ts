import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_application_ajv_surplus_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.json.application<[ArrayRecursiveUnionExplicitPointer], "ajv", true>(),
  );
