import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_assertStringifyCustom_TypeTagType = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) =>
    typia.json.assertStringify<TypeTagType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
