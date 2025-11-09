import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_assertHeadersCustom_ObjectHttpUndefindable = (): void => _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)((input) => typia.http.assertHeaders<ObjectHttpUndefindable>(input, (p) => new CustomGuardError(p)));
