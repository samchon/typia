import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_createAssertFormDataCustom_ObjectHttpFormData =
  (): void =>
    _test_http_assertFormData(CustomGuardError)(
      "ObjectHttpFormData",
    )<ObjectHttpFormData>(ObjectHttpFormData)(
      typia.http.createAssertFormData<ObjectHttpFormData>(
        (p) => new CustomGuardError(p),
      ),
    );
