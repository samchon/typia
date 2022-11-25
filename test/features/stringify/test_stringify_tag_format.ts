import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_tag_format = _test_stringify(
    "format tag",
    TagFormat.generate,
    (input) => TSON.stringify(input),
);
