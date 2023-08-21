import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagType } from "../../structures/TagType";

export const test_validate_TagType = _test_validate("TagType")<TagType>(
    TagType,
)((input) => typia.validate<TagType>(input));
