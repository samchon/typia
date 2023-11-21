import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_createValidateCamel_TupleRestAtomic =
  _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )<typia.CamelCase<TupleRestAtomic>>({
    convert: typia.notations.createValidateCamel<TupleRestAtomic>(),
    assert: typia.createAssert<typia.CamelCase<TupleRestAtomic>>(),
  });
