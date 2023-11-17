import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertGuardEquals_TupleRestAtomic =
  _test_assertGuardEquals("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    typia.createAssertGuardEquals<TupleRestAtomic>(),
  );
