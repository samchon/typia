import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_validateStringify_ArrayUnion = (): void => _test_json_validateStringify(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)((input) => typia.json.validateStringify<ArrayUnion>(input));
