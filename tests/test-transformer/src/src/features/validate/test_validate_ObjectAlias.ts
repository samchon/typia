import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_validate_ObjectAlias = (): void => _test_validate(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.validate<ObjectAlias>(input));
