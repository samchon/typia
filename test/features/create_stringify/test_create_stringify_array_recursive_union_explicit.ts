import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_array_recursive_union_explicit =
    _test_stringify(
        "recursive union array",
        ArrayRecursiveUnionExplicit.generate(),
        TSON.createStringify<ArrayRecursiveUnionExplicit>(),
    );
