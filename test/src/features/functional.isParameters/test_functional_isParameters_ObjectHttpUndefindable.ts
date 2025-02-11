import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_isParameters_ObjectHttpUndefindable =
  _test_functional_isParameters("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
    typia.functional.isParameters(p),
  );
