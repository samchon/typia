import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_createAssertQueryCustom_ObjectHttpConstant = (): void => _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)(typia.http.createAssertQuery<ObjectHttpConstant>((p) => new CustomGuardError(p)));
