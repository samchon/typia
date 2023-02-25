import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_random } from "../internal/_test_random";

export const test_random_TagMatrix = _test_random(
    "TagMatrix",
    () => typia.random<TagMatrix>(),
    typia.createAssert<typia.Primitive<TagMatrix>>(),
);
