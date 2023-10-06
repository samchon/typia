import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_misc_createAssertClone_NativeUnion = _test_misc_assertClone(
    "NativeUnion",
)<NativeUnion>(NativeUnion)(typia.misc.createAssertClone<NativeUnion>());
