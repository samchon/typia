import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is } from "./_test_is";

export const test_is_object_alias = _test_is(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].id = 3 as any),
        (input) => (input[0].email = null!),
        (input) => (input[0].name = (() => "name") as any),
        (input) => (input[0].sex = 3 as 2),
        (input) => (input[0].age = "infinite" as any),
        (input) => (input[0].dead = "alive" as any),
    ],
);
