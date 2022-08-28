import TSON from "../../../src";
import { TagSimple } from "../../structures/TagSimple";
import { _test_is } from "./_test_is";

export const test_is_tag_simple = _test_is(
    "tag simple",
    TagSimple.generate,
    (input) => TSON.is(input),
);
