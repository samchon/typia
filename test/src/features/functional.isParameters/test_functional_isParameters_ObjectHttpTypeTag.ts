import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_isParameters_ObjectHttpTypeTag =
  _test_functional_isParameters("ObjectHttpTypeTag")(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
      typia.functional.isParameters(p),
  );
