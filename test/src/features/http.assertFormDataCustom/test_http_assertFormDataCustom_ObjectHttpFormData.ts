import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_assertFormDataCustom_ObjectHttpFormData =
  _test_http_assertFormData(CustomGuardError)(
    "ObjectHttpFormData",
  )<ObjectHttpFormData>(ObjectHttpFormData)((input) =>
    typia.http.assertFormData<ObjectHttpFormData>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
