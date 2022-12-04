import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_SetSimple = _test_validateClone(
    "SetSimple",
    SetSimple.generate,
    TSON.createValidateClone<SetSimple>(),
    SetSimple.SPOILERS,
);
