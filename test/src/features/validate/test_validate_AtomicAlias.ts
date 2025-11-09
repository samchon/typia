import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_validate_AtomicAlias = (): void => _test_validate(
    "AtomicAlias",
)<AtomicAlias>(
    AtomicAlias
)((input) => typia.validate<AtomicAlias>(input));
