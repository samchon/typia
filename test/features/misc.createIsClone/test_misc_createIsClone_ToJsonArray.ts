import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_misc_isClone_ToJsonArray = _test_misc_isClone(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.misc.createIsClone<ToJsonArray>(),
);
