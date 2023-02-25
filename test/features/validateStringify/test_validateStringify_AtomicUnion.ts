import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_AtomicUnion = _test_validateStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validateStringify(input),
    AtomicUnion.SPOILERS,
);
