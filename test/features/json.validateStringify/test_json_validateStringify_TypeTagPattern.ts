import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_validateStringify_TypeTagPattern = _test_json_validateStringify(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((input) => typia.json.validateStringify<TypeTagPattern>(input));
