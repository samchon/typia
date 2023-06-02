import typia from "../../../src";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_random } from "../../internal/_test_random";

export const test_random_ObjectIntersection = _test_random(
    "ObjectIntersection",
    () => typia.random<ObjectIntersection>(),
typia.createAssert<typia.Primitive<ObjectIntersection>>(),
);
