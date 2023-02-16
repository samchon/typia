import typia from "typia";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_AtomicUnion = _test_validate(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validate(input),
    AtomicUnion.SPOILERS,
);
