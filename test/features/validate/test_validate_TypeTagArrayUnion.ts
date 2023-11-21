import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_validate_TypeTagArrayUnion = _test_validate(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.validate<TypeTagArrayUnion>(input),
);
