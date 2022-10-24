import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_tag_tuple = _test_stringify(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.stringify(input),
);
