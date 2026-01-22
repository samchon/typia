import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createEquals_TupleRestAtomic = (): void =>
  _test_equals("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    typia.createEquals<TupleRestAtomic>(),
  );
