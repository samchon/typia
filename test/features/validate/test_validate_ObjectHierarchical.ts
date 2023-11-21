import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_validate_ObjectHierarchical = _test_validate(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.validate<ObjectHierarchical>(input),
);
