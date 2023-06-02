import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_validateStringify_ToJsonUnion = _test_validateStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) =>
        ((
            input: Array<
                | string
                | number
                | ToJsonUnion.ICitizen
                | ToJsonUnion.IWrapper<boolean>
                | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
            >,
        ): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<
                Array<
                    | string
                    | number
                    | ToJsonUnion.ICitizen
                    | ToJsonUnion.IWrapper<boolean>
                    | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                    | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
                >
            > => {
                const __is: any = (
                    input: any,
                ): input is Array<
                    | string
                    | number
                    | ToJsonUnion.ICitizen
                    | ToJsonUnion.IWrapper<boolean>
                    | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                    | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
                > => {
                    const $io0: any = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.mobile &&
                        "string" === typeof input.name;
                    const $io1: any = (input: any): boolean => true;
                    const $io2: any = (input: any): boolean => true;
                    const $io3: any = (input: any): boolean => true;
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if (undefined !== input.id) return $io0(input);
                            return (() => {
                                if ($io3(input)) return $io3(input);
                                if ($io2(input)) return $io2(input);
                                if ($io1(input)) return $io1(input);
                                return false;
                            })();
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                null !== elem &&
                                undefined !== elem &&
                                ("string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    ("object" === typeof elem &&
                                        null !== elem &&
                                        $iu0(elem))),
                        )
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validateStringify as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<
                        | string
                        | number
                        | ToJsonUnion.ICitizen
                        | ToJsonUnion.IWrapper<boolean>
                        | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                        | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
                    > => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    }),
                                "string" === typeof input.mobile ||
                                    $report(_exceptionable, {
                                        path: _path + ".mobile",
                                        expected: "string",
                                        value: input.mobile,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                true ||
                                    $report(_exceptionable, {
                                        path: _path + ".toJSON",
                                        expected: "unknown",
                                        value: input.toJSON,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                true ||
                                    $report(_exceptionable, {
                                        path: _path + ".toJSON",
                                        expected: "unknown",
                                        value: input.toJSON,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                true ||
                                    $report(_exceptionable, {
                                        path: _path + ".toJSON",
                                        expected: "unknown",
                                        value: input.toJSON,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vu0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if (undefined !== input.id)
                                    return $vo0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return (
                                    $vo3(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo2(
                                        input,
                                        _path,
                                        false && _exceptionable,
                                    ) ||
                                    $vo1(input, _path, false && _exceptionable)
                                );
                            })();
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ToJsonUnion",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            (null !== elem ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                                    value: elem,
                                                })) &&
                                            (undefined !== elem ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem ||
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                                        value: elem,
                                                    })) &&
                                                    $vu0(
                                                        elem,
                                                        _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        true,
                                                    )) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                                    value: elem,
                                                })),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ToJsonUnion",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify: any = (
                input: Array<
                    | string
                    | number
                    | ToJsonUnion.ICitizen
                    | ToJsonUnion.IWrapper<boolean>
                    | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                    | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
                >,
            ): string => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.manufacturer &&
                    "string" === typeof input.brand &&
                    "string" === typeof input.name;
                const $string: any = (typia.validateStringify as any).string;
                const $number: any = (typia.validateStringify as any).number;
                const $throws: any = (typia.validateStringify as any).throws;
                const $so0: any = (input: any): any =>
                    `{"id":${$number(input.id)},"mobile":${$string(
                        input.mobile,
                    )},"name":${$string(input.name)}}`;
                const $so1: any = (input: any): any =>
                    `{"manufacturer":${$string(
                        input.manufacturer,
                    )},"brand":${$string(input.brand)},"name":${$string(
                        input.name,
                    )}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.id) return $so0(input);
                        if (undefined !== input.manufacturer)
                            return $so1(input);
                        $throws({
                            expected:
                                "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
                            value: input,
                        });
                    })();
                return (() =>
                    `[${input
                        .map((elem: any) =>
                            (() => {
                                if (
                                    "object" === typeof elem &&
                                    "function" === typeof elem.toJSON
                                )
                                    return JSON.stringify(elem.toJSON());
                                if ("string" === typeof elem)
                                    return $string(elem);
                                if ("number" === typeof elem)
                                    return $number(elem);
                                if ("boolean" === typeof elem) return elem;
                                if ("object" === typeof elem && null !== elem)
                                    return $su0(elem);
                                $throws({
                                    expected:
                                        "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean | number | string | unknown)",
                                    value: elem,
                                });
                            })(),
                        )
                        .join(",")}]`)();
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
);
