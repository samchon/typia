import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagTuple = _test_equals(
    "TagTuple",
    TagTuple.generate,
    TSON.createEquals<TagTuple>(),
);
