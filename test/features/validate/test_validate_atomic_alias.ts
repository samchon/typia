import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validate } from "./_test_validate";

export const test_validate_atomic_alias = _test_validate(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.validate(input),
    AtomicAlias.SPOILERS,
);
