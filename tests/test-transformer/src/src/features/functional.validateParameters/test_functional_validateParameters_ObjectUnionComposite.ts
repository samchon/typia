import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateParameters_ObjectUnionComposite = (): void => _test_functional_validateParameters(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.validateParameters(p),
)