import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_createIsStringify_ObjectDate = (): void => _test_json_isStringify(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)(typia.json.createIsStringify<ObjectDate>());
