import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_validateStringify_SetSimple = _test_validateStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.validateStringify<SetSimple>(input),
    SetSimple.SPOILERS,
);
