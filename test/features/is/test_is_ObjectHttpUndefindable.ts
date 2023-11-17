import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_is_ObjectHttpUndefindable = _test_is(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
  typia.is<ObjectHttpUndefindable>(input),
);
