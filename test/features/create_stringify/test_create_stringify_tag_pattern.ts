import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_tag_pattern = _test_stringify(
    "pattern tag",
    TagPattern.generate(),
    TSON.createStringify<TagPattern>(),
);
