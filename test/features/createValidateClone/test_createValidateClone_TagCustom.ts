import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_createValidateClone_TagCustom = _test_validateClone(
    "TagCustom",
    TagCustom.generate,
    typia.createValidateClone<TagCustom>(),
    TagCustom.SPOILERS,
);
