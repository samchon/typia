import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TypeTagType =
  _test_json_assertStringify(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) =>
    typia.json.assertStringify<TypeTagType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
