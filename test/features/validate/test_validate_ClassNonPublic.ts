import typia from "typia";

import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ClassNonPublic = _test_validate(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input) => typia.validate(input),
    ClassNonPublic.SPOILERS,
);
