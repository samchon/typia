import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_random_AtomicSimple = (): void =>
  _test_random("AtomicSimple")<AtomicSimple>(AtomicSimple)({
    random: () => typia.random<AtomicSimple>((AtomicSimple as any).RANDOM),
    assert: typia.createAssert<AtomicSimple>(),
  });
