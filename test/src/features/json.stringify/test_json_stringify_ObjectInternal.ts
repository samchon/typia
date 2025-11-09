import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_stringify_ObjectInternal = (): void => _test_json_stringify(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.json.stringify<ObjectInternal>(input));
