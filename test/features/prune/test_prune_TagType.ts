import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagType } from "../../structures/TagType";

export const test_prune_TagType = _test_prune(
    "TagType",
    TagType.generate,
    (input) => typia.prune<TagType>(input),
);
