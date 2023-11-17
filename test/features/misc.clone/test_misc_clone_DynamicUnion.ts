import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_clone_DynamicUnion = _test_misc_clone(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) => typia.misc.clone<DynamicUnion>(input));
