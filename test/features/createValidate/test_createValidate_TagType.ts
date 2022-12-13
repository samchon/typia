import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagType = _test_validate(
    "TagType",
    TagType.generate,
    typia.createValidate<TagType>(),
    TagType.SPOILERS,
);