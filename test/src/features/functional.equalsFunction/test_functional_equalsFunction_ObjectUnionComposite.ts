import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_equalsFunction_ObjectUnionComposite = (): void =>
  _test_functional_equalsFunction("ObjectUnionComposite")(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
      typia.functional.equalsFunction(p),
  );
