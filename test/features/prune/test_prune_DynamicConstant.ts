import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_prune_DynamicConstant = _test_prune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.prune(input),
);
