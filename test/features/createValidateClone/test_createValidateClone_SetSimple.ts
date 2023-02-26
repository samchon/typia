import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_createValidateClone_SetSimple = _test_validateClone(
    "SetSimple",
    SetSimple.generate,
    typia.createValidateClone<SetSimple>(),
    SetSimple.SPOILERS,
);
