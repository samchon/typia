import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectIntersection = _test_isStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.isStringify(input),
    ObjectIntersection.SPOILERS,
);