import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createValidateEquals_ObjectHttpTypeTag = (): void =>
  _test_validateEquals("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.createValidateEquals<ObjectHttpTypeTag>());
