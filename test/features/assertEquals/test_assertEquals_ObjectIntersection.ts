import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertEquals_ObjectIntersection = _test_assertEquals(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.assertEquals<ObjectIntersection>(input),
);
