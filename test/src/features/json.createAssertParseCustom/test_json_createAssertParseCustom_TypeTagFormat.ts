import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createAssertParseCustom_TypeTagFormat =
  _test_json_assertParse(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(
    typia.json.createAssertParse<TypeTagFormat>((p) => new CustomGuardError(p)),
  );
