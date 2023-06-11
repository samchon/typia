import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_createValidateStringify_SetUnion = _test_validateStringify(
    "SetUnion",
    SetUnion.generate,
    typia.createValidateStringify<SetUnion>(),
    SetUnion.SPOILERS,
);
