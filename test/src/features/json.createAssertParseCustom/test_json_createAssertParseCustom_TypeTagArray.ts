import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TypeTagArray = (): void => _test_json_assertParse(CustomGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.json.createAssertParse<TypeTagArray>((p) => new CustomGuardError(p)));
