import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertEquals_AtomicSimple = _test_assertEquals(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
  typia.assertEquals<AtomicSimple>(input),
);
