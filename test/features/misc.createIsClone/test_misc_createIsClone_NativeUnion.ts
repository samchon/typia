import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_misc_isClone_NativeUnion = _test_misc_isClone<NativeUnion>(
    NativeUnion,
)(typia.misc.createIsClone<NativeUnion>());
