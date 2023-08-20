import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_equals_ObjectUndefined = _test_equals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectUndefined => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.name &&
                (undefined === input.professor ||
                    "string" === typeof input.professor ||
                    ("number" === typeof input.professor &&
                        Number.isFinite(input.professor))) &&
                (undefined === input.classroom ||
                    ("object" === typeof input.classroom &&
                        null !== input.classroom &&
                        $io1(input.classroom, true && _exceptionable))) &&
                (undefined === input.grade ||
                    ("number" === typeof input.grade &&
                        Number.isFinite(input.grade))) &&
                null !== input.nothing &&
                undefined === input.nothing &&
                true &&
                null !== input.never &&
                undefined === input.never &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "name",
                                "professor",
                                "classroom",
                                "grade",
                                "nothing",
                                "unknown",
                                "never",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["id", "name"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io0(elem, true),
                )
            );
        })(input),
);
