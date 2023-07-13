import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_validateParse_ArrayRecursiveUnionExplicit =
    _test_json_validateParse(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => typia.json.validateParse<ArrayRecursiveUnionExplicit>(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
