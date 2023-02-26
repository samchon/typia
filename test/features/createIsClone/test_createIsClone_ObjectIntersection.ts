import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createIsClone_ObjectIntersection = _test_isClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIsClone<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
