import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_tag_array = _test_validate_equals(
    "array tag",
    TagArray.generate,
    (input) => TSON.validateEquals(input),
);
