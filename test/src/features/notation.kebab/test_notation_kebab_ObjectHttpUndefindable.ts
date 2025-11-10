import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_validateKebab_ObjectHttpUndefindable = (): void =>
  _test_notation_validateGeneral(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)<
    typia.KebabCase<ObjectHttpUndefindable>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ObjectHttpUndefindable>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpUndefindable>>(),
  });
