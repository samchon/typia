import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_equals_AtomicClass = _test_equals("AtomicClass")<AtomicClass>(
  AtomicClass,
)((input) => typia.equals<AtomicClass>(input));
