import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createPrune_TypeTagLength = _test_misc_prune(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.misc.createPrune<TypeTagLength>());
