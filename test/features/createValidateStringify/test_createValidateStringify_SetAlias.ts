import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_SetAlias = _test_validateStringify(
    "SetAlias",
    SetAlias.generate,
    TSON.createValidateStringify<SetAlias>(),
    SetAlias.SPOILERS,
);
