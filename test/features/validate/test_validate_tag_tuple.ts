import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_tag_tuple = _test_validate(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.validate(input),
    TagTuple.SPOILERS,
);
