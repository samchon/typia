import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_http_assertHeaders_ObjectHttpConstant = (): void => _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.http.assertHeaders<ObjectHttpConstant>(input));
