import typia from "typia";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectUndefined = _test_random(
    "ObjectUndefined",
    () => typia.random<ObjectUndefined>(),
    typia.createAssert<typia.Primitive<ObjectUndefined>>(),
);
