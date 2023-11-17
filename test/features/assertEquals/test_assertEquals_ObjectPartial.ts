import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertEquals_ObjectPartial = _test_assertEquals(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.assertEquals<ObjectPartial>(input),
);
