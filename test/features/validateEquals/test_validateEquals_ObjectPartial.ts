import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_validateEquals_ObjectPartial = _test_validateEquals(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.validateEquals<ObjectPartial>(input),
);
