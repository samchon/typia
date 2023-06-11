import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createIs_ObjectIntersection = _test_is(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIs<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
