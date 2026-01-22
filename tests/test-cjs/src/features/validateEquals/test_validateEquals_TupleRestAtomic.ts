import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_validateEquals_TupleRestAtomic = (): void =>
  _test_validateEquals("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    (input) => typia.validateEquals<TupleRestAtomic>(input),
  );
