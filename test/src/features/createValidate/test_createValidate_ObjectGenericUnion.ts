import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createValidate_ObjectGenericUnion = _test_validate(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)(typia.createValidate<ObjectGenericUnion>());
