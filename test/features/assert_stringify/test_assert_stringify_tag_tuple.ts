import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_tag_tuple = _test_assert_stringify(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.assertStringify(input),
    TagTuple.SPOILERS,
);
