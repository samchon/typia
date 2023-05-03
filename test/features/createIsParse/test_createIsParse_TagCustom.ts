import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_createIsParse_TagCustom = _test_isParse(
    "TagCustom",
    TagCustom.generate,
    typia.createIsParse<TagCustom>(),
    TagCustom.SPOILERS,
);
