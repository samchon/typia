import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_validateParse_ArrayRecursiveUnionExplicit = (): void =>
  _test_json_validateParse(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.json.validateParse<ArrayRecursiveUnionExplicit>(input),
  );
