import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_is_ClassClosure = (): void =>
  _test_is("ClassClosure")<ClassClosure>(ClassClosure)((input) =>
    typia.is<ClassClosure>(input),
  );
