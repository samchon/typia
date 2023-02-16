import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicComposite = _test_equals(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.equals(input),
);
