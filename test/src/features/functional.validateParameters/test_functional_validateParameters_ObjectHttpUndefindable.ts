import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_validateParameters_ObjectHttpUndefindable =
  (): void =>
    _test_functional_validateParameters("ObjectHttpUndefindable")(
      ObjectHttpUndefindable,
    )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      typia.functional.validateParameters(p),
    );
