import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_prune_ArraySimple = _test_prune(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.prune<ArraySimple>(input),
);
