import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_isClone_DynamicTree = _test_misc_isClone<DynamicTree>(
    DynamicTree,
)(typia.misc.createIsClone<DynamicTree>());
