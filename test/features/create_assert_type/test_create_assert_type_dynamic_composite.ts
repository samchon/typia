import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_dynamic_composite = _test_assert_type(
    "dynamic composite",
    DynamicComposite.generate,
    TSON.createAssertType<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
