import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertEquals_ObjectJsonTag =
    _test_assertEquals<ObjectJsonTag>(ObjectJsonTag)((input) =>
        typia.assertEquals<ObjectJsonTag>(input),
    );
