import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_standardSchema_createValidate_AtomicClass = (): void => _test_standardSchema_validate(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.createValidate<AtomicClass>());
