import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createIs_ObjectHttpFormData = _test_is(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)(typia.createIs<ObjectHttpFormData>());
