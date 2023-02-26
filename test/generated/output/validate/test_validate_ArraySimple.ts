import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_validate_ArraySimple = _test_validate(
    "ArraySimple",
    ArraySimple.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<ArraySimple.IPerson>> => {
            const errors = [] as any[];
            const $report = (typia.validate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArraySimple => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.email ||
                            $report(_exceptionable, {
                                path: _path + ".email",
                                expected: "string",
                                value: input.email,
                            }),
                        ((Array.isArray(input.hobbies) ||
                            $report(_exceptionable, {
                                path: _path + ".hobbies",
                                expected: "Array<Resolve<ArraySimple.IHobby>>",
                                value: input.hobbies,
                            })) &&
                            input.hobbies
                                .map(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".hobbies[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "Resolve<ArraySimple.IHobby>",
                                                value: elem,
                                            })) &&
                                            $vo1(
                                                elem,
                                                _path +
                                                    ".hobbies[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".hobbies[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "Resolve<ArraySimple.IHobby>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".hobbies",
                                expected: "Array<Resolve<ArraySimple.IHobby>>",
                                value: input.hobbies,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.body ||
                            $report(_exceptionable, {
                                path: _path + ".body",
                                expected: "string",
                                value: input.body,
                            }),
                        ("number" === typeof input.rank &&
                            Number.isFinite(input.rank)) ||
                            $report(_exceptionable, {
                                path: _path + ".rank",
                                expected: "number",
                                value: input.rank,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Resolve<ArraySimple.IPerson>>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "Resolve<ArraySimple.IPerson>",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ArraySimple.IPerson>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<ArraySimple.IPerson>>",
                        value: input,
                    })
                );
            })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
    ArraySimple.SPOILERS,
);
