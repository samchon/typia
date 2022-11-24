import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_dynamic_composite =
    _test_assert_stringify(
        "dynamic composite",
        DynamicComposite.generate,
        TSON.createAssertStringify<DynamicComposite>(),
        DynamicComposite.SPOILERS,
    );
