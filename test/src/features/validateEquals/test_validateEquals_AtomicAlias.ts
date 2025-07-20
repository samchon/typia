import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_validateEquals_AtomicAlias = (): void =>
  _test_validateEquals("AtomicAlias")<AtomicAlias>(AtomicAlias)((input) =>
    typia.validateEquals<AtomicAlias>(input),
  );
