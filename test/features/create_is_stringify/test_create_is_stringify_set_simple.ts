import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_set_simple = _test_is_stringify(
    "simple set",
    SetSimple.generate,
    TSON.createIsStringify<SetSimple>(),
    SetSimple.SPOILERS,
);
