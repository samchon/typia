import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectIntersection = _test_equals(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.equals(input),
);