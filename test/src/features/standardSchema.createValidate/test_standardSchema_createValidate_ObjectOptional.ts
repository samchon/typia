import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_standardSchema_createValidate_ObjectOptional = (): void => _test_standardSchema_validate(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.createValidate<ObjectOptional>());
