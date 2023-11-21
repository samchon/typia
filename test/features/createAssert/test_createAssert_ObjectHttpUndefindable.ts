import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createAssert_ObjectHttpUndefindable = _test_assert(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  typia.createAssert<ObjectHttpUndefindable>(),
);
