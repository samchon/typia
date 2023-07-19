import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertEquals_ObjectNullable =
    _test_assertEquals<ObjectNullable>(ObjectNullable)((input) =>
        typia.assertEquals(input),
    );
