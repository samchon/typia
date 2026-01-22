import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_assertStringifyCustom_TypeTagPattern = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagPattern",
  )<TypeTagPattern>(TypeTagPattern)((input) =>
    typia.json.assertStringify<TypeTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
