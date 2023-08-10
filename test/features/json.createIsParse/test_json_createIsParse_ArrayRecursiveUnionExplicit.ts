import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_isParse_ArrayRecursiveUnionExplicit =
    _test_json_isParse<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit,
    )(typia.json.createIsParse<ArrayRecursiveUnionExplicit>());
