import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagType } from "../../structures/TagType";

export const test_is_TagType = _test_is("TagType")<TagType>(TagType)(
    typia.createIs<TagType>(),
);
