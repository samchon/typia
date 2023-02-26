import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createValidateClone_ArrayMatrix = _test_validateClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (
        input: any,
    ): typia.IValidation<typia.Primitive<Array<Array<Array<number>>>>> => {
        const validate = (input: any): typia.IValidation<ArrayMatrix> => {
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayMatrix => {
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Array<Array<number>>>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((Array.isArray(elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "Array<Array<number>>",
                                            value: elem,
                                        })) &&
                                        elem
                                            .map(
                                                (elem: any, _index2: number) =>
                                                    ((Array.isArray(elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index2 +
                                                                "]",
                                                            expected:
                                                                "Array<number>",
                                                            value: elem,
                                                        })) &&
                                                        elem
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index3: number,
                                                                ) =>
                                                                    ("number" ===
                                                                        typeof elem &&
                                                                        Number.isFinite(
                                                                            elem,
                                                                        )) ||
                                                                    $report(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index2 +
                                                                                "][" +
                                                                                _index3 +
                                                                                "]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem,
                                                                        },
                                                                    ),
                                                            )
                                                            .every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "Array<number>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Array<Array<number>>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Array<Array<number>>>",
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
        const clone = (input: ArrayMatrix): typia.Primitive<ArrayMatrix> => {
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      Array.isArray(elem)
                          ? elem.map((elem: any) =>
                                Array.isArray(elem)
                                    ? elem.map((elem: any) => elem as any)
                                    : (elem as any),
                            )
                          : (elem as any),
                  )
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    ArrayMatrix.SPOILERS,
);
