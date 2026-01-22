import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createValidate_ClassClosure = (): void =>
  _test_validate("ClassClosure")<ClassClosure>(ClassClosure)(
    typia.createValidate<ClassClosure>(),
  );
