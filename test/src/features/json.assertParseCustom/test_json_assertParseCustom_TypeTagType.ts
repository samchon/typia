import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_assertParseCustom_TypeTagType = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) =>
    typia.json.assertParse<TypeTagType>(input, (p) => new CustomGuardError(p)),
  );
