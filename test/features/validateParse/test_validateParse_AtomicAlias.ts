import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_validateParse_AtomicAlias = _test_validateParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.validateParse<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
