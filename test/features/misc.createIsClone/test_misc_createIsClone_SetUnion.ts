import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_misc_isClone_SetUnion = _test_misc_isClone<SetUnion>(
    SetUnion,
)(typia.misc.createIsClone<SetUnion>());
