import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagType } from "../../structures/TagType";

export const test_misc_clone_TagType = _test_misc_clone<TagType>(TagType)(
    typia.misc.createClone<TagType>(),
);
