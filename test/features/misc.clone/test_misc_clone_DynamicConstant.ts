import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_clone_DynamicConstant = _test_misc_clone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.misc.clone(input),
);
