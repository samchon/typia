import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_SetSimple = _test_is(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.is(input),
    SetSimple.SPOILERS,
);
