import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createAssert_ObjectPartial = _test_assert(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.createAssert<ObjectPartial>());
