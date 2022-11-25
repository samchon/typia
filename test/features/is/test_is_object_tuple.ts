import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_is } from "../internal/_test_is";

export const test_is_object_tuple = _test_is(
    "union object",
    ObjectTuple.generate,
    (input) => TSON.is(input),
    ObjectTuple.SPOILERS,
);
