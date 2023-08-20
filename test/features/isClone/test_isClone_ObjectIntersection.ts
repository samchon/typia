import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_isClone_ObjectIntersection = _test_isClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.isClone<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
