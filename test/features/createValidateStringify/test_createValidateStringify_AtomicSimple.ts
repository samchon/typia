import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_AtomicSimple = _test_validateStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidateStringify<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
