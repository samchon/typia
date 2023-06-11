import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagType } from "../../structures/TagType";

export const test_createPrune_TagType = _test_prune(
    "TagType",
    TagType.generate,
    typia.createPrune<TagType>(),
);
