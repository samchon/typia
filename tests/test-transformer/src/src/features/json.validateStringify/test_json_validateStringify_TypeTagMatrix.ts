import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_validateStringify_TypeTagMatrix = (): void => _test_json_validateStringify(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((input) => typia.json.validateStringify<TypeTagMatrix>(input));
