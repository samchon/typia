import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_internal = _test_assert_stringify(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.assertStringify(input),
    ObjectInternal.SPOILERS,
);
