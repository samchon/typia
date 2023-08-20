import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_validateStringify_SetAlias = _test_validateStringify(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.validateStringify<SetAlias>(input),
    SetAlias.SPOILERS,
);
