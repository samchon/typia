import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_DynamicNever = _test_prune(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.prune(input),
);