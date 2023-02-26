import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createStringify_ClassGetter = _test_stringify(
    "ClassGetter",
    ClassGetter.generate,
    typia.createStringify<ClassGetter>(),
);
