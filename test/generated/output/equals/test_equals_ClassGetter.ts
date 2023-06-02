import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_equals_ClassGetter = _test_equals(
    "ClassGetter",
    ClassGetter.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is ClassGetter.Person => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                (null === input.dead || "boolean" === typeof input.dead) &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["id", "name", "dead"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        })(input),
);
