import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_createIsClone_TagCustom = _test_isClone(
    "TagCustom",
    TagCustom.generate,
    typia.createIsClone<TagCustom>(),
    TagCustom.SPOILERS,
);
