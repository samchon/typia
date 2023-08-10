import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_misc_isClone_TagMatrix = _test_misc_isClone<TagMatrix>(
    TagMatrix,
)(typia.misc.createIsClone<TagMatrix>());
