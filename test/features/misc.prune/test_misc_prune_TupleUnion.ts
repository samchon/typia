import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_prune_TupleUnion = _test_misc_prune(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.misc.prune(input),
);
