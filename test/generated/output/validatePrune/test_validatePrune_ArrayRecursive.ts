import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_validatePrune_ArrayRecursive = _test_validatePrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) =>
        ((input: any): typia.IValidation<ArrayRecursive.ICategory> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ArrayRecursive.ICategory> => {
                const __is: any = (
                    input: any,
                ): input is ArrayRecursive.ICategory => {
                    const $io0: any = (input: any): boolean =>
                        Array.isArray(input.children) &&
                        input.children.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        ) &&
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.code &&
                        "number" === typeof input.sequence &&
                        Number.isFinite(input.sequence) &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validatePrune as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ArrayRecursive.ICategory => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.children) ||
                                    $report(_exceptionable, {
                                        path: _path + ".children",
                                        expected:
                                            "Array<ArrayRecursive.ICategory>",
                                        value: input.children,
                                    })) &&
                                    input.children
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".children[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ArrayRecursive.ICategory",
                                                        value: elem,
                                                    })) &&
                                                    $vo0(
                                                        elem,
                                                        _path +
                                                            ".children[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".children[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ArrayRecursive.ICategory",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".children",
                                        expected:
                                            "Array<ArrayRecursive.ICategory>",
                                        value: input.children,
                                    }),
                                ("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    }),
                                "string" === typeof input.code ||
                                    $report(_exceptionable, {
                                        path: _path + ".code",
                                        expected: "string",
                                        value: input.code,
                                    }),
                                ("number" === typeof input.sequence &&
                                    Number.isFinite(input.sequence)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".sequence",
                                        expected: "number",
                                        value: input.sequence,
                                    }),
                                ((("object" === typeof input.created_at &&
                                    null !== input.created_at) ||
                                    $report(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected: "ArrayRecursive.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $vo1(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected: "ArrayRecursive.ITimestamp",
                                        value: input.created_at,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.time &&
                                    Number.isFinite(input.time)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".time",
                                        expected: "number",
                                        value: input.time,
                                    }),
                                ("number" === typeof input.zone &&
                                    Number.isFinite(input.zone)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".zone",
                                        expected: "number",
                                        value: input.zone,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ArrayRecursive.ICategory",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ArrayRecursive.ICategory",
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
            const prune: any = (input: ArrayRecursive.ICategory): void => {
                const $io0: any = (input: any): boolean =>
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io1(input.created_at);
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                const $po0: any = (input: any): any => {
                    if (Array.isArray(input.children))
                        (() =>
                            input.children.forEach((elem: any) => {
                                if ("object" === typeof elem && null !== elem)
                                    $po0(elem);
                            }))();
                    if (
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                    )
                        $po1(input.created_at);
                    for (const key: any of Object.keys(input)) {
                        if (
                            "children" === key ||
                            "id" === key ||
                            "code" === key ||
                            "sequence" === key ||
                            "created_at" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po1: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("time" === key || "zone" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output: any = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    ArrayRecursive.SPOILERS,
);
