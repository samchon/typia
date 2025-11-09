import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_assertQueryCustom_ObjectHttpAtomic = (): void => _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.http.assertQuery<ObjectHttpAtomic>(input, (p) => new CustomGuardError(p)));
