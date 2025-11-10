import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_createValidateKebab_ObjectHttpUndefindable =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)<
      typia.KebabCase<ObjectHttpUndefindable>
    >({
      convert: typia.notations.createValidateKebab<ObjectHttpUndefindable>(),
      assert: typia.createAssert<typia.KebabCase<ObjectHttpUndefindable>>(),
    });
