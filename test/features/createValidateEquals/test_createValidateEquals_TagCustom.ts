import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_TagCustom = _test_validateEquals(
    "TagCustom",
    TagCustom.generate,
    typia.createValidateEquals<TagCustom>(),
);
