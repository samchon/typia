import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_clone_ObjectSimple = _test_misc_clone<ObjectSimple>(
    ObjectSimple,
)((input) => typia.misc.clone(input));
