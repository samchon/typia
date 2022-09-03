import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_is } from "./_test_is";

export const test_is_tag_type = _test_is(
    "type tag",
    TagType.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].int = 0.1),
        (input) => (input[1].uint = -1),
        (input) => (input[2].uint = 0.5),
        (input) => (input[3].uint = -0.5),
    ],
);
