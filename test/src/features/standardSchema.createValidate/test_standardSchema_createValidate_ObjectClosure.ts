import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_standardSchema_createValidate_ObjectClosure = _test_standardSchema_validate(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)(typia.createValidate<ObjectClosure>());
