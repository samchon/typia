import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_AtomicAlias = _test_validateParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => TSON.validateParse<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
