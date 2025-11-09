import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_validateParse_TypeTagPattern = (): void => _test_json_validateParse(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((input) => typia.json.validateParse<TypeTagPattern>(input));
