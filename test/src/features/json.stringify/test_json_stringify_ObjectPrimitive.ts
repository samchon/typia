import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_stringify_ObjectPrimitive = (): void => _test_json_stringify(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)((input) => typia.json.stringify<ObjectPrimitive>(input));
