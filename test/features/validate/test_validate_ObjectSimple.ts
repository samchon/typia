import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_validate_ObjectSimple = _test_validate(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) => typia.validate<ObjectSimple>(input));
