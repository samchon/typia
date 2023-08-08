import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagCustom } from "../../structures/TagCustom";

export const test_validate_TagCustom = _test_validate(
    "TagCustom",
    TagCustom.generate,
    typia.createValidate<TagCustom>(),
    TagCustom.SPOILERS,
);
