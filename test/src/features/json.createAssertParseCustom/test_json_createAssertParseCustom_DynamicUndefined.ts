import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_DynamicUndefined = (): void => _test_json_assertParse(CustomGuardError)(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)(typia.json.createAssertParse<DynamicUndefined>((p) => new CustomGuardError(p)));
