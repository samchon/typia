import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_standardSchema_createValidate_ObjectHttpFormData = (): void => _test_standardSchema_validate(
    "ObjectHttpFormData",
)<ObjectHttpFormData>(
    ObjectHttpFormData
)(typia.createValidate<ObjectHttpFormData>());
