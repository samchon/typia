import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_is } from "../internal/_test_is";

export const test_is_ToJsonArray = _test_is(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.is(input),
);
