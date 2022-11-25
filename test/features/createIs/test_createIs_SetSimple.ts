import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_SetSimple = _test_is(
    "SetSimple",
    SetSimple.generate,
    TSON.createIs<SetSimple>(),
    SetSimple.SPOILERS,
);
