import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_is_ObjectPartial = _test_is("ObjectPartial")<ObjectPartial>(
  ObjectPartial,
)((input) => typia.is<ObjectPartial>(input));
