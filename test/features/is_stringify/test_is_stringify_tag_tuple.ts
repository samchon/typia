import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_tag_tuple = _test_is_stringify(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.isStringify(input),
    TagTuple.SPOILERS,
);
