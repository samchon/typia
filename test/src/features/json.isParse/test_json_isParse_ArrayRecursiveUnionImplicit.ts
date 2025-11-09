import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_isParse_ArrayRecursiveUnionImplicit = (): void =>
  _test_json_isParse(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.json.isParse<ArrayRecursiveUnionImplicit>(input),
  );
