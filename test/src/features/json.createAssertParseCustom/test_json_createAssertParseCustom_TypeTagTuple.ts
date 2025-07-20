import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_createAssertParseCustom_TypeTagTuple = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(typia.json.createAssertParse<TypeTagTuple>((p) => new CustomGuardError(p)));
