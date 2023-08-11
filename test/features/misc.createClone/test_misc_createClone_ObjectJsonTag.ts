import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_clone_ObjectJsonTag = _test_misc_clone<ObjectJsonTag>(
    ObjectJsonTag,
)(typia.misc.createClone<ObjectJsonTag>());
