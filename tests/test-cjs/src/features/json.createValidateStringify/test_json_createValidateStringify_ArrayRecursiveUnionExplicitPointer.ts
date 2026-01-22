import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createValidateStringify_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_validateStringify(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.json.createValidateStringify<ArrayRecursiveUnionExplicitPointer>(),
    );
