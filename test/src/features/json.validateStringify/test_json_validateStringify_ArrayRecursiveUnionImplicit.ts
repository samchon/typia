import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_validateStringify_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_json_validateStringify(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
      typia.json.validateStringify<ArrayRecursiveUnionImplicit>(input),
    );
