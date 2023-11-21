import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_notation_validatePascal_AtomicUnion =
  _test_notation_validateGeneral("AtomicUnion")<AtomicUnion>(AtomicUnion)<
    typia.PascalCase<AtomicUnion>
  >({
    convert: (input) => typia.notations.validatePascal<AtomicUnion>(input),
    assert: typia.createAssert<typia.PascalCase<AtomicUnion>>(),
  });
