import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_atomic_simple = _test_validate(
    "atomic",
    AtomicSimple.generate,
    TSON.createValidate<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
