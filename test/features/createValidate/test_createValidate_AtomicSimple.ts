import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_AtomicSimple = _test_validate(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createValidate<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
