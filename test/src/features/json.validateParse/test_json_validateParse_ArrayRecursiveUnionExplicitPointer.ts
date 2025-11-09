import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_validateParse_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_validateParse(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      (input) =>
        typia.json.validateParse<ArrayRecursiveUnionExplicitPointer>(input),
    );
