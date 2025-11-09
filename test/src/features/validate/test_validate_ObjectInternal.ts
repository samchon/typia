import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_validate_ObjectInternal = (): void => _test_validate(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.validate<ObjectInternal>(input));
