import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_createAssertHeadersCustom_ObjectHttpArray = (): void => _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.http.createAssertHeaders<ObjectHttpArray>((p) => new CustomGuardError(p)));
