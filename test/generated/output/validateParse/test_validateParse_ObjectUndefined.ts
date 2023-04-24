import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_validateParse_ObjectUndefined = _test_validateParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<ObjectUndefined>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectUndefined> => {
                const __is = (input: any): input is ObjectUndefined => {
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        (undefined === input.professor ||
                            "string" === typeof input.professor ||
                            ("number" === typeof input.professor &&
                                Number.isFinite(input.professor))) &&
                        (undefined === input.classroom ||
                            ("object" === typeof input.classroom &&
                                null !== input.classroom &&
                                $io1(input.classroom))) &&
                        (undefined === input.grade ||
                            ("number" === typeof input.grade &&
                                Number.isFinite(input.grade))) &&
                        null !== input.nothing &&
                        undefined === input.nothing &&
                        true &&
                        null !== input.never &&
                        undefined === input.never;
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.name;
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
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUndefined => {
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
                                undefined === input.professor ||
                                    "string" === typeof input.professor ||
                                    ("number" === typeof input.professor &&
                                        Number.isFinite(input.professor)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".professor",
                                        expected:
                                            "(number | string | undefined)",
                                        value: input.professor,
                                    }),
                                undefined === input.classroom ||
                                    ((("object" === typeof input.classroom &&
                                        null !== input.classroom) ||
                                        $report(_exceptionable, {
                                            path: _path + ".classroom",
                                            expected:
                                                "(Resolve<ObjectUndefined.IClassroom> | undefined)",
                                            value: input.classroom,
                                        })) &&
                                        $vo1(
                                            input.classroom,
                                            _path + ".classroom",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".classroom",
                                        expected:
                                            "(Resolve<ObjectUndefined.IClassroom> | undefined)",
                                        value: input.classroom,
                                    }),
                                undefined === input.grade ||
                                    ("number" === typeof input.grade &&
                                        Number.isFinite(input.grade)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".grade",
                                        expected: "(number | undefined)",
                                        value: input.grade,
                                    }),
                                (null !== input.nothing ||
                                    $report(_exceptionable, {
                                        path: _path + ".nothing",
                                        expected: "undefined",
                                        value: input.nothing,
                                    })) &&
                                    (undefined === input.nothing ||
                                        $report(_exceptionable, {
                                            path: _path + ".nothing",
                                            expected: "undefined",
                                            value: input.nothing,
                                        })),
                                true,
                                (null !== input.never ||
                                    $report(_exceptionable, {
                                        path: _path + ".never",
                                        expected: "undefined",
                                        value: input.never,
                                    })) &&
                                    (undefined === input.never ||
                                        $report(_exceptionable, {
                                            path: _path + ".never",
                                            expected: "undefined",
                                            value: input.never,
                                        })),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<Resolve<ObjectUndefined.ILecture>>",
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
                                                        "Resolve<ObjectUndefined.ILecture>",
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
                                                expected:
                                                    "Resolve<ObjectUndefined.ILecture>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<ObjectUndefined.ILecture>>",
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
            };
            input = JSON.parse(input);
            const output = validate(input);
            return output as any;
        })(input),
    ObjectUndefined.SPOILERS,
);
