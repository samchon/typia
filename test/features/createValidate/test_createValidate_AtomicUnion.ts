import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_AtomicUnion = _test_validate(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createValidate<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
