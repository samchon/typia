import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_assertQueryCustom_ObjectHttpCommentTag = (): void => _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)((input) => typia.http.assertQuery<ObjectHttpCommentTag>(input, (p) => new CustomGuardError(p)));
