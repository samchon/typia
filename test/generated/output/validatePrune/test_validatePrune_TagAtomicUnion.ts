import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_validatePrune_TagAtomicUnion = _test_validatePrune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<TagAtomicUnion.Type>> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<TagAtomicUnion.Type>> => {
                const errors = [] as any[];
                const $report = (typia.validatePrune as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TagAtomicUnion.Type> => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("string" === typeof input.value &&
                                3 <= input.value.length &&
                                7 >= input.value.length) ||
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value) &&
                                    3 <= input.value) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "(number | string)",
                                    value: input.value,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<TagAtomicUnion.Type>",
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
                                                expected: "TagAtomicUnion.Type",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagAtomicUnion.Type",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<TagAtomicUnion.Type>",
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
            const prune = (input: Array<TagAtomicUnion.Type>): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    TagAtomicUnion.SPOILERS,
);
