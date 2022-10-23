import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_array_recursive_union_implicit =
    _test_stringify(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate(),
        TSON.createStringify<ArrayRecursiveUnionImplicit>(),
    );
