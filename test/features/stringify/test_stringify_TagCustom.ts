import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_TagCustom = _test_stringify(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.stringify(input),
);
