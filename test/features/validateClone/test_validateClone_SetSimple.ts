import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_SetSimple = _test_validateClone(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.validateClone(input),
    SetSimple.SPOILERS,
);