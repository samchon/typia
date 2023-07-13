import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_stringify_ArrayRecursiveUnionImplicit =
    _test_json_stringify(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) => typia.json.stringify(input),
    );
