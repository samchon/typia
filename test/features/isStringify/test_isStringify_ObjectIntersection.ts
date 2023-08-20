import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_isStringify_ObjectIntersection = _test_isStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.isStringify<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
