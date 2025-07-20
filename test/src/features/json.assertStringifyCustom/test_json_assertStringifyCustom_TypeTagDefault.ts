import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_assertStringifyCustom_TypeTagDefault = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)((input) =>
    typia.json.assertStringify<TypeTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
