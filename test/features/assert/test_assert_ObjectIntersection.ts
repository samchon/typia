import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectIntersection = _test_assert(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => TSON.assert(input),
    ObjectIntersection.SPOILERS,
);
