import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createAssertStringifyCustom_TypeTagDefault = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)(
    typia.json.createAssertStringify<TypeTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
