import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_validate_ClassClosure = _test_validate(
  "ClassClosure",
)<ClassClosure>(ClassClosure)((input) => typia.validate<ClassClosure>(input));
