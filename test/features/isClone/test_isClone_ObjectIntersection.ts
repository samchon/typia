import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectIntersection = _test_isClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => TSON.isClone(input),
    ObjectIntersection.SPOILERS,
);