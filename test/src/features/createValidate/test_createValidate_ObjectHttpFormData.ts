import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_createValidate_ObjectHttpFormData = _test_validate(
    "ObjectHttpFormData",
)<ObjectHttpFormData>(
    ObjectHttpFormData
)(typia.createValidate<ObjectHttpFormData>());
