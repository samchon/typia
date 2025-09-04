import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_createValidateStringify_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_json_validateStringify(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
      typia.json.createValidateStringify<ArrayRecursiveUnionImplicit>(),
    );
