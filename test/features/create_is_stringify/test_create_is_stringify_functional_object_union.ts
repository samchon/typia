import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_functional_object_union =
    _test_is_stringify(
        "functional union object",
        FunctionalObjectUnion.generate,
        TSON.createIsStringify<FunctionalObjectUnion>(),
        FunctionalObjectUnion.SPOILERS,
    );
