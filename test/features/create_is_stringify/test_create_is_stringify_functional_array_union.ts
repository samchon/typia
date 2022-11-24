import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_functional_array_union =
    _test_is_stringify(
        "functional union array",
        FunctionalArrayUnion.generate,
        TSON.createIsStringify<FunctionalArrayUnion>(),
        FunctionalArrayUnion.SPOILERS,
    );
