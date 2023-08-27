import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_validateEquals_TypeTagArrayUnion = _test_validateEquals(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.validateEquals<TypeTagArrayUnion>(input),
);
