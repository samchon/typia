import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_createStringify_ClassGetter = _test_json_stringify(
    "ClassGetter",
)<ClassGetter>(ClassGetter)(typia.json.createStringify<ClassGetter>());
