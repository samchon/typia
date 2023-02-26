import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_is_ObjectIntersection = _test_is(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.is(input),
    ObjectIntersection.SPOILERS,
);
