import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_generic_alias =
    _test_assert_stringify(
        "generic aliased object",
        ObjectGenericAlias.generate,
        (input) => TSON.assertStringify(input),
        ObjectGenericAlias.SPOILERS,
    );
