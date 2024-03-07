import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.json.application<
      [ArrayRecursiveUnionExplicitPointer],
      "swagger",
      true
    >(),
  );
