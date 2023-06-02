import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_assertClone_SetSimple = _test_assertClone(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.assertClone(input),
    SetSimple.SPOILERS,
);
