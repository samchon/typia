import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createValidate_ObjectDescription = _test_validate(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.createValidate<ObjectDescription>());
