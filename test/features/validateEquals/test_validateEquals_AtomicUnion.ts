import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_validateEquals_AtomicUnion = _test_validateEquals(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.validateEquals<AtomicUnion>(input),
);
