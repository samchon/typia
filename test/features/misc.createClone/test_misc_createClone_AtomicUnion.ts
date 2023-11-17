import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_createClone_AtomicUnion = _test_misc_clone(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(typia.misc.createClone<AtomicUnion>());
