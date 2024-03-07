import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayRecursiveUnionExplicit =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.json.assertStringify<ArrayRecursiveUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
