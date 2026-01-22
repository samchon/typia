import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_validateEquals_AtomicSimple = (): void =>
  _test_validateEquals("AtomicSimple")<AtomicSimple>(AtomicSimple)((input) =>
    typia.validateEquals<AtomicSimple>(input),
  );
