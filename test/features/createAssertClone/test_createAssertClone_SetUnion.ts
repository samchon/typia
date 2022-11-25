import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_SetUnion = _test_assertClone(
    "SetUnion",
    SetUnion.generate,
    TSON.createAssertClone<SetUnion>(),
    SetUnion.SPOILERS,
);