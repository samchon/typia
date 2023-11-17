import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertEquals_ObjectHttpConstant = _test_assertEquals(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.assertEquals<ObjectHttpConstant>(input),
);
