import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createValidate_ObjectClosure = _test_validate(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(typia.createValidate<ObjectClosure>());
