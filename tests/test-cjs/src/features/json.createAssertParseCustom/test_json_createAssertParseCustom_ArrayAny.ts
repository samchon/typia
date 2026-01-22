import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createAssertParseCustom_ArrayAny = (): void =>
  _test_json_assertParse(CustomGuardError)("ArrayAny")<ArrayAny>(ArrayAny)(
    typia.json.createAssertParse<ArrayAny>((p) => new CustomGuardError(p)),
  );
