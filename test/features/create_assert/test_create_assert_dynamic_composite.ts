import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_composite = _test_assert(
    "dynamic composite",
    DynamicComposite.generate,
    TSON.createAssert<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
