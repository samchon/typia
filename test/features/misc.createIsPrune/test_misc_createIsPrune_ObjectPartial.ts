import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_createIsPrune_ObjectPartial = _test_misc_isPrune(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.misc.createIsPrune<ObjectPartial>());
