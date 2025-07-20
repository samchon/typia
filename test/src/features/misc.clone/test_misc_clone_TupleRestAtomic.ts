import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_clone_TupleRestAtomic = (): void =>
  _test_misc_clone("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    (input) => typia.misc.clone<TupleRestAtomic>(input),
  );
