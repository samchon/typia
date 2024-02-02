import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createAssertFormData_ObjectHttpAtomic =
  _test_http_assertFormData("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.http.createAssertFormData<ObjectHttpAtomic>());
