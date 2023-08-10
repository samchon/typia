import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_misc_clone_NativeUnion = _test_misc_clone<NativeUnion>(
    NativeUnion,
)((input) => typia.misc.clone<NativeUnion>(input));
