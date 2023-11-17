import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createAssertClone_AtomicUnion = _test_misc_assertClone(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(typia.misc.createAssertClone<AtomicUnion>());
