import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_createAssertParseCustom_DynamicUnion = (): void =>
  _test_json_assertParse(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.json.createAssertParse<DynamicUnion>((p) => new CustomGuardError(p)));
