import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_standardSchema_createValidate_ObjectDynamic = _test_standardSchema_validate(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)(typia.createValidate<ObjectDynamic>());
