import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createAssertParseCustom_TypeTagCustom =
  _test_json_assertParse(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(
    typia.json.createAssertParse<TypeTagCustom>((p) => new CustomGuardError(p)),
  );
