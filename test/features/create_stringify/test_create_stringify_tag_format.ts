import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_tag_format = _test_stringify(
    "format tag",
    TagFormat.generate(),
    TSON.createStringify<TagFormat>(),
);
