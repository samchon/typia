import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_standardSchema_createValidate_ClassClosure = (): void => _test_standardSchema_validate(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)(typia.createValidate<ClassClosure>());
