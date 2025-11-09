import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_validate_ObjectHttpFormData = (): void => _test_validate(
    "ObjectHttpFormData",
)<ObjectHttpFormData>(
    ObjectHttpFormData
)((input) => typia.validate<ObjectHttpFormData>(input));
