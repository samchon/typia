import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tag_tuple = _test_validate(
    "tuple tag",
    TagTuple.generate,
    TSON.createValidate<TagTuple>(),
    TagTuple.SPOILERS,
);
