import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_isPrune_ObjectIntersection = _test_isPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.isPrune<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
