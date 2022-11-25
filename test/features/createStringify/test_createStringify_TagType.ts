import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TagType = _test_stringify(
    "TagType",
    TagType.generate,
    TSON.createStringify<TagType>(),
);