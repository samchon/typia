import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_is_ObjectClosure = (): void =>
  _test_is("ObjectClosure")<ObjectClosure>(ObjectClosure)((input) =>
    typia.is<ObjectClosure>(input),
  );
