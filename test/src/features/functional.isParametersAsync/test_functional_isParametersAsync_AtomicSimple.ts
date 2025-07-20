import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_isParametersAsync_AtomicSimple =
  (): Promise<void> =>
    _test_functional_isParametersAsync("AtomicSimple")(AtomicSimple)(
      (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
        typia.functional.isParameters(p),
    );
