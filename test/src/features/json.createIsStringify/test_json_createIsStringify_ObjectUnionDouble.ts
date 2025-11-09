import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_createIsStringify_ObjectUnionDouble = (): void => _test_json_isStringify(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.json.createIsStringify<ObjectUnionDouble>());
