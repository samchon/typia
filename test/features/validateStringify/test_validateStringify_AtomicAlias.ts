import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_validateStringify_AtomicAlias = _test_validateStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.validateStringify(input),
    AtomicAlias.SPOILERS,
);
