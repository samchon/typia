import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_isStringify_ClassGetter = _test_json_isStringify(
    "ClassGetter",
    ClassGetter.generate,
    typia.json.createIsStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
