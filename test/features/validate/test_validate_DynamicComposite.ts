import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicComposite = _test_validate(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.validate(input),
    DynamicComposite.SPOILERS,
);
