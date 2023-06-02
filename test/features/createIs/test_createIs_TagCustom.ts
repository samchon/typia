import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagCustom } from "../../structures/TagCustom";

export const test_createIs_TagCustom = _test_is(
    "TagCustom",
    TagCustom.generate,
    typia.createIs<TagCustom>(),
    TagCustom.SPOILERS,
);
