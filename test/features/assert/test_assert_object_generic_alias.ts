import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert } from "./_test_assert";

export const test_assert_object_generic_alias = _test_assert(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.value = { value: "value" } as any;
            return "$input.value";
        },
        (input) => {
            input.value = null!;
            return "$input.value";
        },
        (input) => {
            input.value = 1 as any;
            return "$input.value";
        },
    ],
);
