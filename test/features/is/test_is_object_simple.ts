import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_object_simple = _test_is(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.is(input),
    ObjectSimple.SPOILERS,
);
