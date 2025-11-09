import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_standardSchema_createValidate_TupleRestObject = (): void => _test_standardSchema_validate(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.createValidate<TupleRestObject>());
