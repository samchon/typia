import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createValidateEquals_ArrayMatrix = _test_validateEquals(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input: any): typia.IValidation<ArrayMatrix> => {
    const errors = [] as any[];
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is ArrayMatrix => {
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    Array.isArray(elem) &&
                    elem.every(
                        (elem: any, _index2: number) =>
                            Array.isArray(elem) &&
                            elem.every(
                                (elem: any, _index3: number) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ),
                    ),
            )
        );
    };
    if (false === __is(input)) {
        const $report = (typia.createValidateEquals as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ArrayMatrix => {
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "ArrayMatrix",
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
                                                                $report(true, {
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
                                                                }),
                                                        )
                                                        .every(
                                                            (flag: boolean) =>
                                                                flag,
                                                        )) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "][" +
                                                        _index2 +
                                                        "]",
                                                    expected: "Array<number>",
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
                    expected: "ArrayMatrix",
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
});
