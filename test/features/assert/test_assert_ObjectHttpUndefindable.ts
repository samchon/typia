import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assert_ObjectHttpUndefindable = _test_assert(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
  typia.assert<ObjectHttpUndefindable>(input),
);
