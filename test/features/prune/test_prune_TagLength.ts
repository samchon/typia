import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagLength } from "../../structures/TagLength";

export const test_prune_TagLength = _test_prune(
    "TagLength",
    TagLength.generate,
    (input) => typia.prune(input),
);
