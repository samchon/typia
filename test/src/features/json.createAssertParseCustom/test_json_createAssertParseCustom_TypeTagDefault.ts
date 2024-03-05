import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createAssertParseCustom_TypeTagDefault =
  _test_json_assertParse(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(
    typia.json.createAssertParse<TypeTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
