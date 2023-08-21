import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_clone_DynamicComposite = _test_misc_clone(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
    typia.misc.createClone<DynamicComposite>(),
);
