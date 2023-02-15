import typia from "typia";

import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_AtomicAlias = _test_validateStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.validateStringify(input),
    AtomicAlias.SPOILERS,
);
