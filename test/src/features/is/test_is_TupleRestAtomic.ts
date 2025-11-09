import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_is_TupleRestAtomic = (): void =>
  _test_is("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)((input) =>
    typia.is<TupleRestAtomic>(input),
  );
