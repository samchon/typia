import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_standardSchema_createValidate_ObjectDescription = (): void => _test_standardSchema_validate(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.createValidate<ObjectDescription>());
