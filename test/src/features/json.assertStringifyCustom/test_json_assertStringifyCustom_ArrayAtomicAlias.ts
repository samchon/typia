import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_assertStringifyCustom_ArrayAtomicAlias = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.json.assertStringify<ArrayAtomicAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
