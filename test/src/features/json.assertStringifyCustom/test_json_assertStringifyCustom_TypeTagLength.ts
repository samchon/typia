import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_assertStringifyCustom_TypeTagLength = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) =>
    typia.json.assertStringify<TypeTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
