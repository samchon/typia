import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_createPrune_TypeTagRange = _test_misc_prune(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.misc.createPrune<TypeTagRange>());
