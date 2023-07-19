import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_validateEquals_ToJsonArray =
    _test_validateEquals<ToJsonArray>(ToJsonArray)((input) =>
        typia.validateEquals(input),
    );
