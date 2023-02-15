import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_AtomicSimple = _test_validateStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validateStringify(input),
    AtomicSimple.SPOILERS,
);
