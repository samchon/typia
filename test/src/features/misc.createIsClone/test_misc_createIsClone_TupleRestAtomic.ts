import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_createIsClone_TupleRestAtomic = (): void =>
  _test_misc_isClone("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    typia.misc.createIsClone<TupleRestAtomic>(),
  );
