import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_createIsClone_ObjectJsonTag = _test_misc_isClone(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.misc.createIsClone<ObjectJsonTag>());
