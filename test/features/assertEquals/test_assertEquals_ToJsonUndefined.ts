import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";

export const test_assertEquals_ToJsonUndefined =
    _test_assertEquals<ToJsonUndefined>(ToJsonUndefined)((input) =>
        typia.assertEquals(input),
    );
