import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssert_ToJsonDouble = _test_assert(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)(typia.createAssert<ToJsonDouble>());
