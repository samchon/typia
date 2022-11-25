import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_SetUnion = _test_isClone(
    "SetUnion",
    SetUnion.generate,
    TSON.createIsClone<SetUnion>(),
    SetUnion.SPOILERS,
);
