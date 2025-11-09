import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_validate_ObjectPartial = (): void => _test_validate(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.validate<ObjectPartial>(input));
