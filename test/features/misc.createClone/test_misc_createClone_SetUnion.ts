import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { SetUnion } from "../../structures/SetUnion";

export const test_misc_createClone_SetUnion = _test_misc_clone(
    "SetUnion",
)<SetUnion>(SetUnion)(typia.misc.createClone<SetUnion>());
