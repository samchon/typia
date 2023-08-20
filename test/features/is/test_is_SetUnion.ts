import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { SetUnion } from "../../structures/SetUnion";

export const test_is_SetUnion = _test_is(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.is<SetUnion>(input),
    SetUnion.SPOILERS,
);
