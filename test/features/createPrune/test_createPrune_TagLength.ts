import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagLength = _test_prune(
    "TagLength",
    TagLength.generate,
    typia.createPrune<TagLength>(),
);
