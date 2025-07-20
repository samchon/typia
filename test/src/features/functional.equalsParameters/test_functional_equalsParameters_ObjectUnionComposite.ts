import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_equalsParameters_ObjectUnionComposite = (): void =>
  _test_functional_equalsParameters("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.equalsParameters(p),
  );
