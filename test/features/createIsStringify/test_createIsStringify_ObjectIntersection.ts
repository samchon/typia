import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createIsStringify_ObjectIntersection = _test_isStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIsStringify<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
