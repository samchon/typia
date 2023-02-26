import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_random } from "../internal/_test_random";

export const test_random_TagFormat = _test_random(
    "TagFormat",
    () => typia.random<TagFormat>(),
    typia.createAssert<TagFormat>(),
);
