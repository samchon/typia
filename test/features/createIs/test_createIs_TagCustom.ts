import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TagCustom = _test_is(
    "TagCustom",
    TagCustom.generate,
    typia.createIs<TagCustom>(),
    TagCustom.SPOILERS,
);
