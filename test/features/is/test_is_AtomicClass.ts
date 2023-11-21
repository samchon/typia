import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_is_AtomicClass = _test_is("AtomicClass")<AtomicClass>(
  AtomicClass,
)((input) => typia.is<AtomicClass>(input));
