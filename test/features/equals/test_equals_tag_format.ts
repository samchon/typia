import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_equals } from "./_test_equals";

export const test_equals_tag_format = _test_equals(
    "format tag",
    TagFormat.generate,
    (input) => TSON.equals(input),
);
