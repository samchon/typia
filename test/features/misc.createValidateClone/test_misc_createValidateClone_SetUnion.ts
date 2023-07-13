import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_misc_validateClone_SetUnion = _test_misc_validateClone(
    "SetUnion",
    SetUnion.generate,
    typia.misc.createValidateClone<SetUnion>(),
    SetUnion.SPOILERS,
);
