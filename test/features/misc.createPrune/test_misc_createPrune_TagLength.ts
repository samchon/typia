import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagLength } from "../../structures/TagLength";

export const test_misc_prune_TagLength = _test_misc_prune<TagLength>(TagLength)(
    typia.misc.createPrune<TagLength>(),
);
