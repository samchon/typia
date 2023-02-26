import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_prune_TagObjectUnion = _test_prune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.prune(input),
);
