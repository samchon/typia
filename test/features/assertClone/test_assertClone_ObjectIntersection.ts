import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertClone_ObjectIntersection = _test_assertClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.assertClone<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
