import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assertEquals_TypeTagObjectUnion = _test_assertEquals(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  typia.assertEquals<TypeTagObjectUnion>(input),
);
