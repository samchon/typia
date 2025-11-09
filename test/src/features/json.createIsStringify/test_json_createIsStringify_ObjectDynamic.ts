import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createIsStringify_ObjectDynamic = (): void => _test_json_isStringify(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)(typia.json.createIsStringify<ObjectDynamic>());
