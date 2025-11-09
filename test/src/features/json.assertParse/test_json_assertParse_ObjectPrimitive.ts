import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectPrimitive = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)((input) => typia.json.assertParse<ObjectPrimitive>(input));
