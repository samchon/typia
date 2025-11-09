import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_createIsStringify_ObjectNullable = (): void => _test_json_isStringify(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.json.createIsStringify<ObjectNullable>());
