import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TagFormat = _test_prune(
    "TagFormat",
    TagFormat.generate,
    typia.createPrune<TagFormat>(),
);
