import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_AtomicAlias = _test_validateStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    TSON.createValidateStringify<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
