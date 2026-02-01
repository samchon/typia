import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_stringify_ObjectDynamic = (): void => _test_json_stringify(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.json.stringify<ObjectDynamic>(input));
