import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_AtomicSimple = _test_validate(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.validate(input),
    AtomicSimple.SPOILERS,
);