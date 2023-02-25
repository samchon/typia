import typia from "../../../src";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicTemplate = _test_validate(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.validate(input),
    DynamicTemplate.SPOILERS,
);
