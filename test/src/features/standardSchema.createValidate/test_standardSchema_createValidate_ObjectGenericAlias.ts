import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_standardSchema_createValidate_ObjectGenericAlias = (): void => _test_standardSchema_validate(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)(typia.createValidate<ObjectGenericAlias>());
