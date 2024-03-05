import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_isReturn_ObjectClosure = _test_functional_isReturn(
  "ObjectClosure",
)(ObjectClosure)((p: (input: ObjectClosure) => ObjectClosure) =>
  typia.functional.isReturn(p),
);
