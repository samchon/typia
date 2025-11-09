import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_isStringify_ArrayRecursiveUnionImplicit = (): void =>
  _test_json_isStringify(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.json.isStringify<ArrayRecursiveUnionImplicit>(input),
  );
