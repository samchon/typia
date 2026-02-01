import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createStringify_ObjectRequired = (): void => _test_json_stringify(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.json.createStringify<ObjectRequired>());
