import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagLength } from "../../structures/TagLength";

export const test_createStringify_TagLength = _test_stringify(
    "TagLength",
    TagLength.generate,
    typia.createStringify<TagLength>(),
);
