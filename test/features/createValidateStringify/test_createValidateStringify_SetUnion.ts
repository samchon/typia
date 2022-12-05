import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_SetUnion = _test_validateStringify(
    "SetUnion",
    SetUnion.generate,
    TSON.createValidateStringify<SetUnion>(),
    SetUnion.SPOILERS,
);
