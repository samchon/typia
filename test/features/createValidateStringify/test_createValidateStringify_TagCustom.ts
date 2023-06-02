import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_createValidateStringify_TagCustom = _test_validateStringify(
    "TagCustom",
    TagCustom.generate,
    typia.createValidateStringify<TagCustom>(),
    TagCustom.SPOILERS,
);
