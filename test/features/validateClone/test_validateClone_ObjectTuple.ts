import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectTuple = _test_validateClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => TSON.validateClone(input),
    ObjectTuple.SPOILERS,
);
