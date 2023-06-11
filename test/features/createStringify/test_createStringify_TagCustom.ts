import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_createStringify_TagCustom = _test_stringify(
    "TagCustom",
    TagCustom.generate,
    typia.createStringify<TagCustom>(),
);
