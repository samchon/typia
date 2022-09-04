import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_tag_array = _test_stringify(
    "array tag",
    TagArray.generate(),
    (input) => TSON.stringify(input),
);
