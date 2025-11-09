import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TypeTagRange = (): void => _test_json_assertParse(CustomGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.json.assertParse<TypeTagRange>(input, (p) => new CustomGuardError(p)));
