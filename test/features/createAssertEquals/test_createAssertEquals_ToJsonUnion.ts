import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertEquals_ToJsonUnion = _test_assertEquals<ToJsonUnion>(
    ToJsonUnion,
)(typia.createAssertEquals<ToJsonUnion>());
