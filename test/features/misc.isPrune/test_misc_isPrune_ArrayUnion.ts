import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_isPrune_ArrayUnion = _test_misc_isPrune(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) => typia.misc.isPrune<ArrayUnion>(input));
