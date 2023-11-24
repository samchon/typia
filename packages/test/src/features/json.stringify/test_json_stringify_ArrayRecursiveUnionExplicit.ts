import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_stringify_ArrayRecursiveUnionExplicit =
  _test_json_stringify(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.json.stringify<ArrayRecursiveUnionExplicit>(input),
  );
