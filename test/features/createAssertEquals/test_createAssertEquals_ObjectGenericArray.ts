import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertEquals_ObjectGenericArray = _test_assertEquals(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)(
  typia.createAssertEquals<ObjectGenericArray>(),
);
