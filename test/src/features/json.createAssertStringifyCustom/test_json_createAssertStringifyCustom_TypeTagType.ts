import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createAssertStringifyCustom_TypeTagType = (): void =>
  _test_json_assertStringify(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(
    typia.json.createAssertStringify<TypeTagType>(
      (p) => new CustomGuardError(p),
    ),
  );
