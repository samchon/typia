import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_misc_prune_TypeTagType = _test_misc_prune(
  "TypeTagType",
)<TypeTagType>(TypeTagType)((input) => typia.misc.prune<TypeTagType>(input));
