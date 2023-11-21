import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_validate_TypeTagTypeUnion = _test_validate(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  typia.validate<TypeTagTypeUnion>(input),
);
