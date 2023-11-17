import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_validatePascal_TupleUnion =
  _test_notation_validateGeneral("TupleUnion")<TupleUnion>(TupleUnion)<
    typia.PascalCase<TupleUnion>
  >({
    convert: (input) => typia.notations.validatePascal<TupleUnion>(input),
    assert: typia.createAssert<typia.PascalCase<TupleUnion>>(),
  });
