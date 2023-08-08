import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_misc_validateClone_ToJsonArray = _test_misc_validateClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.misc.validateClone(input),
);
