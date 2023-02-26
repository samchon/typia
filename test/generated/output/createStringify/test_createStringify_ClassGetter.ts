import typia from "../../../../src";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ClassGetter = _test_stringify(
    "ClassGetter",
    ClassGetter.generate,
    (input: ClassGetter.Person): string => {
        const $string = (typia.createStringify as any).string;
        const $so0 = (input: any): any =>
            `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${
                null !== input.dead ? input.dead : "null"
            }}`;
        return $so0(input);
    },
);
