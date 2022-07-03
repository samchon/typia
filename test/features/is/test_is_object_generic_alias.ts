import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_is } from "./_test_is";

export const test_is_object_generic_alias = _test_is(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.value = undefined!),
        (input) => (input.value = null!),
        (input) => (input.value = 3 as any),
        (input) => (input.value = false as any),
        (input) => (input.value = (() => "string") as any),
    ],
);
