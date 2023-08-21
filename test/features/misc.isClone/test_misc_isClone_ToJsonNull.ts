import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_misc_isClone_ToJsonNull = _test_misc_isClone(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) => typia.misc.isClone<ToJsonNull>(input));
