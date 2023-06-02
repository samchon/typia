import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_TagCustom = _test_stringify(
    "TagCustom",
    TagCustom.generate,
    typia.createStringify<TagCustom>(),
);
