import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagType = _test_validateEquals(
    "TagType",
    TagType.generate,
    typia.createValidateEquals<TagType>(),
);