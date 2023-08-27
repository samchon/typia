import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_random_TypeTagArrayUnion = _test_random(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)({
    random: typia.createRandom<TypeTagArrayUnion>(),
    assert: typia.createAssert<TypeTagArrayUnion>(),
});
