import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_equals_AtomicAlias = _test_equals("AtomicAlias")<AtomicAlias>(
  AtomicAlias,
)((input) => typia.equals<AtomicAlias>(input));
