import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ConstantEnumeration = _test_prune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => ((input: ConstantEnumeration): void => {})(input),
);
