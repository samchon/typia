import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_createStringify_ObjectDate = (): void => _test_json_stringify(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)(typia.json.createStringify<ObjectDate>());
