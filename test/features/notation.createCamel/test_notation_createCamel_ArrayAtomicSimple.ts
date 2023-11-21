import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_notation_createValidateCamel_ArrayAtomicSimple =
  _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )<typia.CamelCase<ArrayAtomicSimple>>({
    convert: typia.notations.createValidateCamel<ArrayAtomicSimple>(),
    assert: typia.createAssert<typia.CamelCase<ArrayAtomicSimple>>(),
  });
