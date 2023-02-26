import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TagFormat = _test_stringify(
    "TagFormat",
    TagFormat.generate,
    typia.createStringify<TagFormat>(),
);
