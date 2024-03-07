import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TypeTagLength =
  _test_json_assertStringify(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) =>
    typia.json.assertStringify<TypeTagLength>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
