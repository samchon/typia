import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_AtomicAlias = _test_validateParse(
    "AtomicAlias",
    AtomicAlias.generate,
    TSON.createValidateParse<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
