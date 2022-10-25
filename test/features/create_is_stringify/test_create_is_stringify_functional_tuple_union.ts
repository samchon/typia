import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_functional_tuple_union =
    _test_is_stringify(
        "functional union tuple",
        FunctionalTupleUnion.generate,
        TSON.createIsStringify<FunctionalTupleUnion>(),
        FunctionalTupleUnion.SPOILERS,
    );
