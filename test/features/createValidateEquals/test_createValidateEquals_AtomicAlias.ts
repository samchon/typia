import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_validateEquals_AtomicAlias =
    _test_validateEquals<AtomicAlias>(AtomicAlias)(
        typia.createValidateEquals<AtomicAlias>(),
    );
