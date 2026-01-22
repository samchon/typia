import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_assertStringifyCustom_TypeTagRange = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )((input) =>
    typia.json.assertStringify<TypeTagRange>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
