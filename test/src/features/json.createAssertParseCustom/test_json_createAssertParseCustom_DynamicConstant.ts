import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_DynamicConstant = (): void => _test_json_assertParse(CustomGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.json.createAssertParse<DynamicConstant>((p) => new CustomGuardError(p)));
