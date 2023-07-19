import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_validateEquals_ToJsonTuple =
    _test_validateEquals<ToJsonTuple>(ToJsonTuple)(
        typia.createValidateEquals<ToJsonTuple>(),
    );
