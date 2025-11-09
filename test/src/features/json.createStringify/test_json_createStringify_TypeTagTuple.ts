import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_createStringify_TypeTagTuple = (): void => _test_json_stringify(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.json.createStringify<TypeTagTuple>());
