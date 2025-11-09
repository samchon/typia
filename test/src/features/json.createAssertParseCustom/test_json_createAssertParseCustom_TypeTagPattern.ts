import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TypeTagPattern = (): void => _test_json_assertParse(CustomGuardError)(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.json.createAssertParse<TypeTagPattern>((p) => new CustomGuardError(p)));
