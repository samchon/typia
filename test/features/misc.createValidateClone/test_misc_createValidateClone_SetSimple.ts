import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_misc_validateClone_SetSimple = _test_misc_validateClone(
    "SetSimple",
    SetSimple.generate,
    typia.misc.createValidateClone<SetSimple>(),
    SetSimple.SPOILERS,
);
