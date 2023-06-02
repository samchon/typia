import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagNaN } from "../../structures/TagNaN";

export const test_random_TagNaN = _test_random(
    "TagNaN",
    () => typia.random<TagNaN>(),
    typia.createAssert<typia.Primitive<TagNaN>>(),
);
