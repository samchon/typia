import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createIsClone_DynamicUnion = _test_misc_isClone(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.misc.createIsClone<DynamicUnion>());
