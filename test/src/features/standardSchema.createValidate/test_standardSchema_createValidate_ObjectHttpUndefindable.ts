import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_standardSchema_createValidate_ObjectHttpUndefindable =
  _test_standardSchema_validate(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.createValidate<ObjectHttpUndefindable>(),
  );
