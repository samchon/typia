import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectIntersection = _test_isStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    TSON.createIsStringify<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
