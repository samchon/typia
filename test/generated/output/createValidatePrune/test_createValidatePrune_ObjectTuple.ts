import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_createValidatePrune_ObjectTuple = _test_validatePrune(
    "ObjectTuple",
    ObjectTuple.generate,
    (input: any): typia.IValidation<ObjectTuple> => {
        const validate: any = (input: any): typia.IValidation<ObjectTuple> => {
            const __is: any = (input: any): input is ObjectTuple => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.code &&
                    "string" === typeof input.name;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                return (
                    Array.isArray(input) &&
                    input.length === 2 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io1(input[1])
                );
            };
            const errors: any = [] as any[];
            const $report: any = (typia.createValidatePrune as any).report(
                errors,
            );
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectTuple => {
                    const $vo0: any = (
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
                            "string" === typeof input.code ||
                                $report(_exceptionable, {
                                    path: _path + ".code",
                                    expected: "string",
                                    value: input.code,
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
                            "string" === typeof input.id ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "string",
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
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectTuple",
                                value: input,
                            })) &&
                            (input.length === 2 ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
                                    value: input,
                                })) &&
                            [
                                ((("object" === typeof input[0] &&
                                    null !== input[0]) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "ObjectTuple.ISection",
                                        value: input[0],
                                    })) &&
                                    $vo0(input[0], _path + "[0]", true)) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "ObjectTuple.ISection",
                                        value: input[0],
                                    }),
                                ((("object" === typeof input[1] &&
                                    null !== input[1]) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "ObjectTuple.ICitizen",
                                        value: input[1],
                                    })) &&
                                    $vo1(input[1], _path + "[1]", true)) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "ObjectTuple.ICitizen",
                                        value: input[1],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectTuple",
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
        const prune: any = (input: ObjectTuple): void => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.code &&
                "string" === typeof input.name;
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.mobile &&
                "string" === typeof input.name;
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("id" === key || "code" === key || "name" === key)
                        continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("id" === key || "mobile" === key || "name" === key)
                        continue;
                    delete input[key];
                }
            };
            if (
                Array.isArray(input) &&
                input.length === 2 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io1(input[1])
            ) {
                if ("object" === typeof input[0] && null !== input[0])
                    $po0(input[0]);
                if ("object" === typeof input[1] && null !== input[1])
                    $po1(input[1]);
            }
        };
        const output: any = validate(input);
        if (output.success) prune(input);
        return output;
    },
    ObjectTuple.SPOILERS,
);
