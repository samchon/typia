import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_validatePrune_ObjectAlias = _test_validatePrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<ObjectAlias.IMember>> => {
            const validate = (input: any): typia.IValidation<ObjectAlias> => {
                const errors = [] as any[];
                const $report = (typia.validatePrune as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectAlias => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            null === input.id ||
                                "string" === typeof input.id ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "(null | string)",
                                    value: input.id,
                                }),
                            "string" === typeof input.email ||
                                $report(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string",
                                    value: input.email,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            null === input.sex ||
                                1 === input.sex ||
                                2 === input.sex ||
                                "male" === input.sex ||
                                "female" === input.sex ||
                                $report(_exceptionable, {
                                    path: _path + ".sex",
                                    expected:
                                        '("female" | "male" | 1 | 2 | null)',
                                    value: input.sex,
                                }),
                            null === input.age ||
                                ("number" === typeof input.age &&
                                    Number.isFinite(input.age)) ||
                                $report(_exceptionable, {
                                    path: _path + ".age",
                                    expected: "(null | number)",
                                    value: input.age,
                                }),
                            null === input.dead ||
                                "boolean" === typeof input.dead ||
                                $report(_exceptionable, {
                                    path: _path + ".dead",
                                    expected: "(boolean | null)",
                                    value: input.dead,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<Resolve<ObjectAlias.IMember>>",
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
                                                    "Resolve<ObjectAlias.IMember>",
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
                                                "Resolve<ObjectAlias.IMember>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Resolve<ObjectAlias.IMember>>",
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
            const prune = (input: ObjectAlias): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "email" === key ||
                            "name" === key ||
                            "sex" === key ||
                            "age" === key ||
                            "dead" === key
                        )
                            continue;
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
    ObjectAlias.SPOILERS,
);
