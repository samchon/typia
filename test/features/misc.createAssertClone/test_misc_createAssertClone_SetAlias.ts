import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_misc_createAssertClone_SetAlias = _test_misc_assertClone(
    "SetAlias",
)<SetAlias>(SetAlias)(typia.misc.createAssertClone<SetAlias>());
