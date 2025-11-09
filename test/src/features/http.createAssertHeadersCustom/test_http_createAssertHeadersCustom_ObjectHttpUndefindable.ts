import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_createAssertHeadersCustom_ObjectHttpUndefindable = (): void => _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.http.createAssertHeaders<ObjectHttpUndefindable>((p) => new CustomGuardError(p)));
