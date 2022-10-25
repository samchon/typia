import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_tag_tuple = _test_is_stringify(
    "tuple tag",
    TagTuple.generate,
    TSON.createIsStringify<TagTuple>(),
    TagTuple.SPOILERS,
);
