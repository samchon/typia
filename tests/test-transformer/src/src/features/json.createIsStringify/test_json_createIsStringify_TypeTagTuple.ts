import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_createIsStringify_TypeTagTuple = (): void => _test_json_isStringify(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.json.createIsStringify<TypeTagTuple>());
