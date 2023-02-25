import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_SetAlias = _test_validateStringify(
    "SetAlias",
    SetAlias.generate,
    typia.createValidateStringify<SetAlias>(),
    SetAlias.SPOILERS,
);
