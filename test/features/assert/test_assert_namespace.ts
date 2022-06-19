import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_assert } from "./_test_assert";

export const test_assert_namespace = _test_assert(
    "namespace",
    Namespace.generate,
    (input) => TSON.assert(input),
);
