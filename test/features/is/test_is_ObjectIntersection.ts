import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectIntersection = _test_is(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.is(input),
    ObjectIntersection.SPOILERS,
);
