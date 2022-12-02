import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagTuple = _test_stringify(
    "TagTuple",
    TagTuple.generate,
    (input) => TSON.stringify(input),
);
