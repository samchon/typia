import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_AtomicSimple = _test_validate(
    "AtomicSimple",
    AtomicSimple.generate,
    TSON.createValidate<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);