import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TagCustom = _test_validate(
    "TagCustom",
    TagCustom.generate,
    typia.createValidate<TagCustom>(),
    TagCustom.SPOILERS,
);
