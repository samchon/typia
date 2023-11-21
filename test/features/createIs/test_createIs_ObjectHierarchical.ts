import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createIs_ObjectHierarchical = _test_is(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)(typia.createIs<ObjectHierarchical>());
