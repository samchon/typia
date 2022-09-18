import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_tag_tuple = _test_validate_equals(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.validateEquals(input),
);
