import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectIntersection = _test_validateEquals(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.validateEquals(input),
);