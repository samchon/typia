import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_createAssertFormData_ObjectHttpFormData = (): void =>
  _test_http_assertFormData(TypeGuardError)(
    "ObjectHttpFormData",
  )<ObjectHttpFormData>(ObjectHttpFormData)(
    typia.http.createAssertFormData<ObjectHttpFormData>(),
  );
