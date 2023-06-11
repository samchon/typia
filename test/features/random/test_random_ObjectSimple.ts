import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_random } from "../../internal/_test_random";

export const test_random_ObjectSimple = _test_random(
    "ObjectSimple",
    () => typia.random<ObjectSimple>(),
typia.createAssert<typia.Primitive<ObjectSimple>>(),
);
