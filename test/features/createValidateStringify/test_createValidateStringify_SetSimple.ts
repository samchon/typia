import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_SetSimple = _test_validateStringify(
    "SetSimple",
    SetSimple.generate,
    TSON.createValidateStringify<SetSimple>(),
    SetSimple.SPOILERS,
);
