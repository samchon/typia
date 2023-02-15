import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_DynamicComposite = _test_random(
    "DynamicComposite",
    typia.createRandom<DynamicComposite>(),
    typia.createAssert<typia.Primitive<DynamicComposite>>(),
);
