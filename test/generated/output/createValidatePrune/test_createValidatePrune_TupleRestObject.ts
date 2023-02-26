import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_createValidatePrune_TupleRestObject = _test_validatePrune(
    "TupleRestObject",
    TupleRestObject.generate,
    (
        input: any,
    ): typia.IValidation<[boolean, number, ...TupleRestObject.IObject[]]> => {
        const validate = (input: any): typia.IValidation<TupleRestObject> => {
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TupleRestObject => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[boolean, number, ...Resolve<TupleRestObject.IObject>]",
                            value: input,
                        })) &&
                        [
                            "boolean" === typeof input[0] ||
                                $report(true, {
                                    path: _path + "[0]",
                                    expected: "boolean",
                                    value: input[0],
                                }),
                            ("number" === typeof input[1] &&
                                Number.isFinite(input[1])) ||
                                $report(true, {
                                    path: _path + "[1]",
                                    expected: "number",
                                    value: input[1],
                                }),
                        ].every((flag: boolean) => flag) &&
                        (((Array.isArray(input.slice(2)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<TupleRestObject.IObject>>",
                                value: input.slice(2),
                            })) &&
                            input
                                .slice(2)
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    (2 + _index1) +
                                                    "]",
                                                expected:
                                                    "Resolve<TupleRestObject.IObject>",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path +
                                                    "[" +
                                                    (2 + _index1) +
                                                    "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path:
                                                _path +
                                                "[" +
                                                (2 + _index1) +
                                                "]",
                                            expected:
                                                "Resolve<TupleRestObject.IObject>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<TupleRestObject.IObject>>",
                                value: input.slice(2),
                            }))) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "[boolean, number, ...Resolve<TupleRestObject.IObject>]",
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
        const prune = (input: TupleRestObject): void => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.value;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            if (
                Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Array.isArray(input.slice(2)) &&
                input
                    .slice(2)
                    .every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
            ) {
                if (Array.isArray(input.slice(2)))
                    input.slice(2).forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            }
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    TupleRestObject.SPOILERS,
);
