import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_validateStringify_ObjectUndefined = _test_validateStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) =>
        ((
            input: Array<ObjectUndefined.ILecture>,
        ): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<ObjectUndefined.ILecture>> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ObjectUndefined.ILecture> => {
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
                                    expected: "(number | string | undefined)",
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
                                                    _path + "[" + _index1 + "]",
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
                                            path: _path + "[" + _index1 + "]",
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
            const stringify = (
                input: Array<ObjectUndefined.ILecture>,
            ): string => {
                const $string = (typia.validateStringify as any).string;
                const $number = (typia.validateStringify as any).number;
                const $throws = (typia.validateStringify as any).throws;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name;
                const $so0 = (input: any): any =>
                    `{${
                        undefined === input.professor
                            ? ""
                            : `"professor":${
                                  undefined !== input.professor
                                      ? (() => {
                                            if (
                                                "string" ===
                                                typeof input.professor
                                            )
                                                return $string(input.professor);
                                            if (
                                                "number" ===
                                                typeof input.professor
                                            )
                                                return $number(input.professor);
                                            $throws({
                                                expected:
                                                    "(number | string | undefined)",
                                                value: input.professor,
                                            });
                                        })()
                                      : undefined
                              },`
                    }${
                        undefined === input.classroom
                            ? ""
                            : `"classroom":${
                                  undefined !== input.classroom
                                      ? `{"id":${$string(
                                            input.classroom.id,
                                        )},"name":${$string(
                                            input.classroom.name,
                                        )}}`
                                      : undefined
                              },`
                    }${
                        undefined === input.grade
                            ? ""
                            : `"grade":${
                                  undefined !== input.grade
                                      ? $number(input.grade)
                                      : undefined
                              },`
                    }${
                        undefined === input.unknown ||
                        "function" === typeof input.unknown
                            ? ""
                            : `"unknown":${
                                  undefined !== input.unknown
                                      ? JSON.stringify(input.unknown)
                                      : undefined
                              },`
                    }"name":${$string(input.name)}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    ObjectUndefined.SPOILERS,
);
