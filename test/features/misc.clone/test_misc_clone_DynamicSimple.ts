import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_clone_DynamicSimple = _test_misc_clone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.misc.clone(input),
);
