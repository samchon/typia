import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_atomic_union = _test_validate(
    "union atomic",
    AtomicUnion.generate,
    TSON.createValidate<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
