import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectIntersection = _test_assertEquals(
    "ObjectIntersection",
    ObjectIntersection.generate,
    TSON.createAssertEquals<ObjectIntersection>(),
);