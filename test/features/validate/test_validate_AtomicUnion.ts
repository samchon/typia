import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_validate_AtomicUnion = _test_validate(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.validate(input),
    AtomicUnion.SPOILERS,
);
