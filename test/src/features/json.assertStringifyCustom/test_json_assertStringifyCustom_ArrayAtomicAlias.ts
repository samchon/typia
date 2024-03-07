import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayAtomicAlias =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.json.assertStringify<ArrayAtomicAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
