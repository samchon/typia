import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_validateStringify_TypeTagArray = _test_json_validateStringify(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.json.validateStringify<TypeTagArray>(input));
