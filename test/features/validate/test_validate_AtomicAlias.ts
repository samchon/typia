import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_AtomicAlias = _test_validate(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => TSON.validate(input),
    AtomicAlias.SPOILERS,
);
