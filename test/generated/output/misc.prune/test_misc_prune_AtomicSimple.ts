import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_misc_prune_AtomicSimple = _test_misc_prune(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
  ((input: AtomicSimple): void => {})(input),
);
