import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_random } from "../internal/_test_random";

export const test_random_TagStep = _test_random(
    "TagStep",
    () => typia.random<TagStep>(),
    typia.createAssert<typia.Primitive<TagStep>>(),
);