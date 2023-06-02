import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_random } from "../../internal/_test_random";

export const test_random_DynamicNever = _test_random(
    "DynamicNever",
    () => typia.random<DynamicNever>(),
typia.createAssert<typia.Primitive<DynamicNever>>(),
);
