import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createAssertParse_ArrayRecursiveUnionExplicitPointer =
    _test_json_assertParse(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        typia.json.createAssertParse<ArrayRecursiveUnionExplicitPointer>(),
    );
