import typia from "../../../../src";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ClassGetter = _test_equals(
    "ClassGetter",
    ClassGetter.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ClassGetter.Person => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead) &&
            (3 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (["id", "name", "dead"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
