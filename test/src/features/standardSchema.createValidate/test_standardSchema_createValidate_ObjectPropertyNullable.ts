import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_standardSchema_createValidate_ObjectPropertyNullable = (): void => _test_standardSchema_validate(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.createValidate<ObjectPropertyNullable>());
