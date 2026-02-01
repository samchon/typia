import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createValidate_ObjectPropertyNullable = (): void => _test_validate(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.createValidate<ObjectPropertyNullable>());
