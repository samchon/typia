import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_createStringify_TagFormat = _test_stringify(
    "TagFormat",
    TagFormat.generate,
    typia.createStringify<TagFormat>(),
);
