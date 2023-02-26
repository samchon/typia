import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_createValidateStringify_SetAlias = _test_validateStringify(
    "SetAlias",
    SetAlias.generate,
    typia.createValidateStringify<SetAlias>(),
    SetAlias.SPOILERS,
);
