import TSON from "../../../src";
import { TagSimple } from "../../structures/TagSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_simple = _test_assert(
    "simple tag",
    TagSimple.generate,
    (input) => TSON.assertType(input),
);
