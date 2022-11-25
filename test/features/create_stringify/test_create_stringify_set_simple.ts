import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_set_simple = _test_stringify(
    "simple set",
    SetSimple.generate,
    TSON.createStringify<SetSimple>(),
);
