import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertGuardEquals_ObjectIntersection =
    _test_assertGuardEquals("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )((input) => typia.assertGuardEquals<ObjectIntersection>(input));
