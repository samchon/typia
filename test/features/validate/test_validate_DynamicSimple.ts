import typia from "../../../src";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicSimple = _test_validate(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.validate(input),
    DynamicSimple.SPOILERS,
);
