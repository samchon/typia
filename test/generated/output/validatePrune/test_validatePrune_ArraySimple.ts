import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_validatePrune_ArraySimple = _test_validatePrune(
    "ArraySimple",
    ArraySimple.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<ArraySimple.IPerson>> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<ArraySimple.IPerson>> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is Array<ArraySimple.IPerson> => {
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "string" === typeof input.email &&
                        Array.isArray(input.hobbies) &&
                        input.hobbies.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "string" === typeof input.body &&
                        "number" === typeof input.rank &&
                        Number.isFinite(input.rank);
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.validatePrune as any).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ArraySimple.IPerson> => {
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
                                        expected: "Array<ArraySimple.IHobby>",
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
                                                            "ArraySimple.IHobby",
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
                                                        "ArraySimple.IHobby",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".hobbies",
                                        expected: "Array<ArraySimple.IHobby>",
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
                                    expected: "ArraySimple",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ArraySimple.IPerson",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "ArraySimple.IPerson",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ArraySimple",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (input: Array<ArraySimple.IPerson>): void => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank;
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                const $pp1 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po1(elem);
                    });
                const $po0 = (input: any): any => {
                    if (Array.isArray(input.hobbies)) $pp1(input.hobbies);
                    for (const key of Object.keys(input)) {
                        if (
                            "name" === key ||
                            "email" === key ||
                            "hobbies" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("name" === key || "body" === key || "rank" === key)
                            continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input)) $pp0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    ArraySimple.SPOILERS,
);
