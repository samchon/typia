import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_createAssertFormDataCustom_ObjectHttpFormData =
  _test_http_assertFormData(CustomGuardError)(
    "ObjectHttpFormData",
  )<ObjectHttpFormData>(ObjectHttpFormData)(
    typia.http.createAssertFormData<ObjectHttpFormData>(
      (p) => new CustomGuardError(p),
    ),
  );
