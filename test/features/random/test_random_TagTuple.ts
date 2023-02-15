import typia from "typia";

import { TagTuple } from "../../structures/TagTuple";
import { _test_random } from "../internal/_test_random";

export const test_random_TagTuple = _test_random(
    "TagTuple",
    () => typia.random<TagTuple>(),
    typia.createAssert<typia.Primitive<TagTuple>>(),
);
