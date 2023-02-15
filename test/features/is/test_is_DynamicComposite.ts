import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicComposite = _test_is(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.is(input),
    DynamicComposite.SPOILERS,
);
