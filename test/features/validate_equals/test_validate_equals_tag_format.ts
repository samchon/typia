import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_tag_format = _test_validate_equals(
    "format tag",
    TagFormat.generate,
    (input) => TSON.validateEquals(input),
);
