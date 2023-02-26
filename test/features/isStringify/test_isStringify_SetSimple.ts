import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_isStringify_SetSimple = _test_isStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.isStringify(input),
    SetSimple.SPOILERS,
);
