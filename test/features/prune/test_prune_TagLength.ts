import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagLength = _test_prune(
    "TagLength",
    TagLength.generate,
    (input) => typia.prune(input),
);
