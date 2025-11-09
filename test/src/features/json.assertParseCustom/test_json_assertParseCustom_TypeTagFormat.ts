import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TypeTagFormat = (): void => _test_json_assertParse(CustomGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.json.assertParse<TypeTagFormat>(input, (p) => new CustomGuardError(p)));
