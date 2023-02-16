import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicComposite = _test_validateClone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.validateClone(input),
    DynamicComposite.SPOILERS,
);
