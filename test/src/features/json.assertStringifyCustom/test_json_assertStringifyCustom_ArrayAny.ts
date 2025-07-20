import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_assertStringifyCustom_ArrayAny = (): void =>
  _test_json_assertStringify(CustomGuardError)("ArrayAny")<ArrayAny>(ArrayAny)(
    (input) =>
      typia.json.assertStringify<ArrayAny>(
        input,
        (p) => new CustomGuardError(p),
      ),
  );
