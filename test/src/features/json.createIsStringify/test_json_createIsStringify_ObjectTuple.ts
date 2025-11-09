import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_createIsStringify_ObjectTuple = (): void => _test_json_isStringify(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.json.createIsStringify<ObjectTuple>());
