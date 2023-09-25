import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertEquals_ObjectIntersection = _test_assertEquals(
    "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)(
    typia.createAssertEquals<ObjectIntersection>(),
);
