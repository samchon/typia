import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_namespace = _test_assert_stringify(
    "namespace",
    Namespace.generate,
    TSON.createAssertStringify<Namespace>(),
);
