import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_validateParse_TypeTagDefault = (): void => _test_json_validateParse(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((input) => typia.json.validateParse<TypeTagDefault>(input));
