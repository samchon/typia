import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_standardSchema_createValidate_ObjectHttpTypeTag = (): void => _test_standardSchema_validate(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)(typia.createValidate<ObjectHttpTypeTag>());
