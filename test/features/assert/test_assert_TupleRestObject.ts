import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assert_TupleRestObject = _test_assert<TupleRestObject>(
    TupleRestObject,
)((input) => typia.assert<TupleRestObject>(input));
