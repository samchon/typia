import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_prune_DynamicComposite = _test_prune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.prune<DynamicComposite>(input),
);
