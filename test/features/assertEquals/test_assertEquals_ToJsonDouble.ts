import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertEquals_ToJsonDouble = _test_assertEquals<ToJsonDouble>(
    ToJsonDouble,
)((input) => typia.assertEquals<ToJsonDouble>(input));
