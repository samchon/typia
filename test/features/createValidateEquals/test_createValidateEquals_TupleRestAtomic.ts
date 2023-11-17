import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createValidateEquals_TupleRestAtomic = _test_validateEquals(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)(
  typia.createValidateEquals<TupleRestAtomic>(),
);
