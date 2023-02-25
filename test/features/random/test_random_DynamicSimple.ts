import typia from "../../../src";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_random } from "../internal/_test_random";

export const test_random_DynamicSimple = _test_random(
    "DynamicSimple",
    () => typia.random<DynamicSimple>(),
    typia.createAssert<typia.Primitive<DynamicSimple>>(),
);
