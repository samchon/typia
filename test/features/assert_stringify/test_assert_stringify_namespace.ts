import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_namespace = _test_assert_stringify(
    "namespace",
    Namespace.generate,
    (input) => TSON.assertStringify(input),
);
