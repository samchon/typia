import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createAssertParseCustom_DynamicSimple = (): void =>
  _test_json_assertParse(CustomGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )(
    typia.json.createAssertParse<DynamicSimple>((p) => new CustomGuardError(p)),
  );
