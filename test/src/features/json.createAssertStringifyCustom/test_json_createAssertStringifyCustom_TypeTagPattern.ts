import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createAssertStringifyCustom_TypeTagPattern = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagPattern",
  )<TypeTagPattern>(TypeTagPattern)(
    typia.json.createAssertStringify<TypeTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );
