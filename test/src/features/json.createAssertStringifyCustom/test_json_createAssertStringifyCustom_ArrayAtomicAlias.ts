import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_createAssertStringifyCustom_ArrayAtomicAlias =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ArrayAtomicAlias",
    )<ArrayAtomicAlias>(ArrayAtomicAlias)(
      typia.json.createAssertStringify<ArrayAtomicAlias>(
        (p) => new CustomGuardError(p),
      ),
    );
