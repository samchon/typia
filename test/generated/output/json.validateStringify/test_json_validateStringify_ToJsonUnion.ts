import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_validateStringify_ToJsonUnion =
    _test_json_validateStringify<ToJsonUnion>(ToJsonUnion)((input) =>
        ((input: ToJsonUnion): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<ToJsonUnion> => {
                const errors = [] as any[];
                const __is = (input: any): input is ToJsonUnion => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.mobile &&
                        "string" === typeof input.name;
                    const $io1 = (input: any): boolean => true;
                    const $io2 = (input: any): boolean => true;
                    const $io3 = (input: any): boolean => true;
                    const $iu0 = (input: any): any =>
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
                if (false === __is(input)) {
                    const $report = (
                        typia.json.validateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonUnion => {
                        const $vo0 = (
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
                        const $vo1 = (
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
                        const $vo2 = (
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
                        const $vo3 = (
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
                        const $vu0 = (
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
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: ToJsonUnion): string => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.manufacturer &&
                    "string" === typeof input.brand &&
                    "string" === typeof input.name;
                const $throws = (typia.json.validateStringify as any).throws;
                const $string = (typia.json.validateStringify as any).string;
                const $number = (typia.json.validateStringify as any).number;
                const $so0 = (input: any): any =>
                    `{"id":${$number(input.id)},"mobile":${$string(
                        input.mobile,
                    )},"name":${$string(input.name)}}`;
                const $so4 = (input: any): any =>
                    `{"manufacturer":${$string(
                        input.manufacturer,
                    )},"brand":${$string(input.brand)},"name":${$string(
                        input.name,
                    )}}`;
                const $su0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.id) return $so0(input);
                        if (undefined !== input.manufacturer)
                            return $so4(input);
                        $throws({
                            expected:
                                "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
                            value: input,
                        });
                    })();
                return `[${input
                    .map((elem: any) =>
                        (() => {
                            if (
                                "object" === typeof elem &&
                                "function" === typeof elem.toJSON
                            )
                                return (() => {
                                    if ("boolean" === typeof elem.toJSON())
                                        return elem.toJSON();
                                    if (
                                        "object" === typeof elem.toJSON() &&
                                        null !== elem.toJSON()
                                    )
                                        return $su0(elem.toJSON());
                                    $throws({
                                        expected:
                                            "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean)",
                                        value: elem.toJSON(),
                                    });
                                })();
                            if ("string" === typeof elem) return $string(elem);
                            if ("number" === typeof elem) return $number(elem);
                            if ("object" === typeof elem && null !== elem)
                                return `{"id":${$number(
                                    (elem as any).id,
                                )},"mobile":${$string(
                                    (elem as any).mobile,
                                )},"name":${$string((elem as any).name)}}`;
                            $throws({
                                expected:
                                    "((ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean) | ToJsonUnion.ICitizen | number | string)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    );
