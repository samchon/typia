import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_isClone_ToJsonArray = _test_isClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.isClone<ToJsonArray>(input),
);
