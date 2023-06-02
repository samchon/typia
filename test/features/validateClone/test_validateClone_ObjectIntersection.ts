import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_validateClone_ObjectIntersection = _test_validateClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.validateClone(input),
    ObjectIntersection.SPOILERS,
);
