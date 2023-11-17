import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertGuardEquals_ToJsonDouble =
    _test_assertGuardEquals("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
        typia.createAssertGuardEquals<ToJsonDouble>(),
    );
