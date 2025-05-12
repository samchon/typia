import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_standardSchema_createValidate_ObjectHttpAtomic =
  _test_standardSchema_validate("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.createValidate<ObjectHttpAtomic>());
