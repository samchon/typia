import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectTuple = _test_isClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => TSON.isClone(input),
    ObjectTuple.SPOILERS,
);