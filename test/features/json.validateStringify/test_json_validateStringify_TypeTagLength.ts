import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_validateStringify_TypeTagLength = _test_json_validateStringify(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.json.validateStringify<TypeTagLength>(input));
