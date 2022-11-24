import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_is } from "../internal/_test_is";

export const test_create_is_set_simple = _test_is(
    "simple set",
    SetSimple.generate,
    TSON.createIs<SetSimple>(),
    SetSimple.SPOILERS,
);
