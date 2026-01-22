import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createValidateParse_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_json_validateParse(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.json.createValidateParse<ArrayRecursiveUnionExplicit>(),
    );
