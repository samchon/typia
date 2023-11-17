import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_isPrune_DynamicComposite = _test_misc_isPrune(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
  typia.misc.isPrune<DynamicComposite>(input),
);
