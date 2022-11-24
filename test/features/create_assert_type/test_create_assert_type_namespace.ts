import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_namespace = _test_assert_type(
    "namespace",
    Namespace.generate,
    TSON.createAssertType<Namespace>(),
    // UNABLE TO SPOIL
);
