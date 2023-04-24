import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_validateParse_ArrayUnion = _test_validateParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: string): typia.IValidation<typia.Primitive<ArrayUnion>> => {
            const validate = (input: any): typia.IValidation<ArrayUnion> => {
                const __is = (input: any): input is ArrayUnion => {
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                (() => {
                                    if (0 === elem.length) return true;
                                    const tupleList = [
                                        [
                                            (top: any) =>
                                                "string" === typeof top,
                                            (top: any) =>
                                                top.every(
                                                    (elem: any) =>
                                                        "string" ===
                                                        typeof elem,
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "boolean" === typeof top,
                                            (top: any) =>
                                                top.every(
                                                    (elem: any) =>
                                                        "boolean" ===
                                                        typeof elem,
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "number" === typeof top &&
                                                Number.isFinite(top),
                                            (top: any) =>
                                                top.every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
                                                ),
                                        ],
                                    ];
                                    const front = elem[0];
                                    const filtered = tupleList.filter(
                                        (tuple) => true === tuple[0](front),
                                    );
                                    if (1 === filtered.length)
                                        return filtered[0][1](elem);
                                    const array = elem;
                                    if (1 < filtered.length)
                                        for (const tuple of filtered)
                                            if (
                                                array.every(
                                                    (value: any) =>
                                                        true ===
                                                        tuple[0](value),
                                                )
                                            )
                                                return tuple[1](array);
                                    return false;
                                })(),
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
                    ): input is ArrayUnion => {
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<(Array<boolean> | Array<number> | Array<string>)>",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((Array.isArray(elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<boolean> | Array<number> | Array<string>)",
                                                    value: elem,
                                                })) &&
                                                (() => {
                                                    if (0 === elem.length)
                                                        return true;
                                                    const tupleList = [
                                                        [
                                                            (top: any) =>
                                                                "string" ===
                                                                typeof top,
                                                            (top: any) =>
                                                                top
                                                                    .map(
                                                                        (
                                                                            elem: any,
                                                                            _index2: number,
                                                                        ) =>
                                                                            "string" ===
                                                                                typeof elem ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index2 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "string",
                                                                                    value: elem,
                                                                                },
                                                                            ),
                                                                    )
                                                                    .every(
                                                                        (
                                                                            flag: boolean,
                                                                        ) =>
                                                                            flag,
                                                                    ),
                                                        ],
                                                        [
                                                            (top: any) =>
                                                                "boolean" ===
                                                                typeof top,
                                                            (top: any) =>
                                                                top
                                                                    .map(
                                                                        (
                                                                            elem: any,
                                                                            _index2: number,
                                                                        ) =>
                                                                            "boolean" ===
                                                                                typeof elem ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index2 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "boolean",
                                                                                    value: elem,
                                                                                },
                                                                            ),
                                                                    )
                                                                    .every(
                                                                        (
                                                                            flag: boolean,
                                                                        ) =>
                                                                            flag,
                                                                    ),
                                                        ],
                                                        [
                                                            (top: any) =>
                                                                "number" ===
                                                                    typeof top &&
                                                                Number.isFinite(
                                                                    top,
                                                                ),
                                                            (top: any) =>
                                                                top
                                                                    .map(
                                                                        (
                                                                            elem: any,
                                                                            _index2: number,
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
                                                                        ) =>
                                                                            flag,
                                                                    ),
                                                        ],
                                                    ];
                                                    const front = elem[0];
                                                    const filtered =
                                                        tupleList.filter(
                                                            (tuple) =>
                                                                true ===
                                                                tuple[0](front),
                                                        );
                                                    if (1 === filtered.length)
                                                        return filtered[0][1](
                                                            elem,
                                                        );
                                                    const array = elem;
                                                    if (1 < filtered.length)
                                                        for (const tuple of filtered)
                                                            if (
                                                                array.every(
                                                                    (
                                                                        value: any,
                                                                    ) =>
                                                                        true ===
                                                                        tuple[0](
                                                                            value,
                                                                        ),
                                                                )
                                                            )
                                                                return tuple[1](
                                                                    array,
                                                                );
                                                    return $report(
                                                        _exceptionable,
                                                        {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "]",
                                                            expected:
                                                                "(Array<string> | Array<boolean> | Array<number>)",
                                                            value: elem,
                                                        },
                                                    );
                                                })()) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<boolean> | Array<number> | Array<string>)",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Array<boolean> | Array<number> | Array<string>)>",
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
    ArrayUnion.SPOILERS,
);
