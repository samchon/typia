import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_misc_createAssertClone_NativeAlias = _test_misc_assertClone(
    "NativeAlias",
)<NativeAlias>(NativeAlias)(typia.misc.createAssertClone<NativeAlias>());
