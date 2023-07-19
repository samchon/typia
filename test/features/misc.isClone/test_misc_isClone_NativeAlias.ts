import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_misc_isClone_NativeAlias = _test_misc_isClone<NativeAlias>(
    NativeAlias,
)((input) => typia.misc.isClone(input));
