import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createAssertParseCustom_TypeTagType =
  _test_json_assertParse(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(typia.json.createAssertParse<TypeTagType>((p) => new CustomGuardError(p)));
