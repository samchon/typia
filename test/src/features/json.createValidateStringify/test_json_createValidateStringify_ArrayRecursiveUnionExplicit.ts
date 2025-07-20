import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createValidateStringify_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_json_validateStringify(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.json.createValidateStringify<ArrayRecursiveUnionExplicit>(),
    );
