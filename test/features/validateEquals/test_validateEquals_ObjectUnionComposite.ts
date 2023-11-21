import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_validateEquals_ObjectUnionComposite = _test_validateEquals(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  typia.validateEquals<ObjectUnionComposite>(input),
);
