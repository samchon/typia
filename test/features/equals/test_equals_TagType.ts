import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagType = _test_equals(
    "TagType",
    TagType.generate,
    (input) => TSON.equals(input),
);
