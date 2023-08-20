import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_validateStringify_SetUnion = _test_validateStringify(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.validateStringify<SetUnion>(input),
    SetUnion.SPOILERS,
);
