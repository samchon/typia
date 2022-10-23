import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_namespace = _test_assert(
    "namespace",
    Namespace.generate,
    TSON.createAssertType<Namespace>(),
    // UNABLE TO SPOIL
);
