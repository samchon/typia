import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectIntersection = _test_assertStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    TSON.createAssertStringify<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);