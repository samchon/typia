import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_prune_ConstantConstEnumeration = _test_prune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.prune(input),
);
