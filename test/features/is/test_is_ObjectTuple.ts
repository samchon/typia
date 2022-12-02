import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectTuple = _test_is(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => TSON.is(input),
    ObjectTuple.SPOILERS,
);
