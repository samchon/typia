import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_atomic_alias = _test_validate(
    "generic alias",
    AtomicAlias.generate,
    TSON.createValidate<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
