import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_generic_alias =
    _test_assert_clone(
        "generic aliased object",
        ObjectGenericAlias.generate,
        (input) => TSON.assertClone(input),
        ObjectGenericAlias.SPOILERS,
    );
