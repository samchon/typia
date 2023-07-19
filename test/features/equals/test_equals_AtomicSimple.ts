import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_equals_AtomicSimple = _test_equals<AtomicSimple>(
    AtomicSimple,
)((input) => typia.equals(input));
