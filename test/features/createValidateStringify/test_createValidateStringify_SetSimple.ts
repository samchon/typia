import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_createValidateStringify_SetSimple = _test_validateStringify(
    "SetSimple",
    SetSimple.generate,
    typia.createValidateStringify<SetSimple>(),
    SetSimple.SPOILERS,
);
