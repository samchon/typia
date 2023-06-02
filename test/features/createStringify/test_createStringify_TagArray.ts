import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagArray } from "../../structures/TagArray";

export const test_createStringify_TagArray = _test_stringify(
    "TagArray",
    TagArray.generate,
    typia.createStringify<TagArray>(),
);
