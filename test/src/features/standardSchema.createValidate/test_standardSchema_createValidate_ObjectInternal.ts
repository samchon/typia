import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_standardSchema_createValidate_ObjectInternal = (): void => _test_standardSchema_validate(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.createValidate<ObjectInternal>());
