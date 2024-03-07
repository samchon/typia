import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TypeTagDefault =
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)((input) =>
    typia.json.assertStringify<TypeTagDefault>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
