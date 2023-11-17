import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_notation_validatePascal_ArrayAtomicSimple =
  _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )<typia.PascalCase<ArrayAtomicSimple>>({
    convert: (input) =>
      typia.notations.validatePascal<ArrayAtomicSimple>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayAtomicSimple>>(),
  });
