import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertClone_ToJsonArray = _test_assertClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.assertClone<ToJsonArray>(input),
);
