import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createIsStringify_ObjectGenericArray = (): void => _test_json_isStringify(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.json.createIsStringify<ObjectGenericArray>());
