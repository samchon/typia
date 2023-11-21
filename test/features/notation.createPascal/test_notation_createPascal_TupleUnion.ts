import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_createValidatePascal_TupleUnion =
  _test_notation_validateGeneral("TupleUnion")<TupleUnion>(TupleUnion)<
    typia.PascalCase<TupleUnion>
  >({
    convert: typia.notations.createValidatePascal<TupleUnion>(),
    assert: typia.createAssert<typia.PascalCase<TupleUnion>>(),
  });
