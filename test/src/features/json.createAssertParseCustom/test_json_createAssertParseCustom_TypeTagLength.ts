import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_createAssertParseCustom_TypeTagLength = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(
    typia.json.createAssertParse<TypeTagLength>((p) => new CustomGuardError(p)),
  );
