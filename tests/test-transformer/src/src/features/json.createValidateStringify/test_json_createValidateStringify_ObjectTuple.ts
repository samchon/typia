import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_createValidateStringify_ObjectTuple = (): void => _test_json_validateStringify(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.json.createValidateStringify<ObjectTuple>());
