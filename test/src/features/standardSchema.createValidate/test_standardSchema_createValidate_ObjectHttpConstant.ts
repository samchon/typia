import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_standardSchema_createValidate_ObjectHttpConstant = _test_standardSchema_validate(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)(typia.createValidate<ObjectHttpConstant>());
