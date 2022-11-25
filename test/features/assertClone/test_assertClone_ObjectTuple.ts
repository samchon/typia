import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectTuple = _test_assertClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => TSON.assertClone(input),
    ObjectTuple.SPOILERS,
);
