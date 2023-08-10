import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_assertStringify_ClassGetter =
    _test_json_assertStringify<ClassGetter>(ClassGetter)((input) =>
        typia.json.assertStringify<ClassGetter>(input),
    );
