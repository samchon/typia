import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_validateStringify_ToJsonAtomicUnion =
    _test_json_validateStringify<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
        (input: ToJsonAtomicUnion): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ToJsonAtomicUnion> => {
                const errors = [] as any[];
                const __is = (input: any): input is ToJsonAtomicUnion => {
                    const $io0 = (input: any): boolean => true;
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.json.createValidateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonAtomicUnion => {
                        const $vo0 = (
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
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ToJsonAtomicUnion",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ToJsonAtomicUnion.IToJson",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "ToJsonAtomicUnion.IToJson",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ToJsonAtomicUnion",
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
            const stringify = (input: ToJsonAtomicUnion): string => {
                const $string = (typia.json.createValidateStringify as any)
                    .string;
                const $number = (typia.json.createValidateStringify as any)
                    .number;
                const $throws = (typia.json.createValidateStringify as any)
                    .throws;
                return `[${input
                    .map((elem: any) =>
                        null !== elem.toJSON()
                            ? (() => {
                                  if ("string" === typeof elem.toJSON())
                                      return $string(elem.toJSON());
                                  if ("number" === typeof elem.toJSON())
                                      return $number(elem.toJSON());
                                  if ("boolean" === typeof elem.toJSON())
                                      return elem.toJSON();
                                  $throws({
                                      expected:
                                          "(boolean | null | number | string)",
                                      value: elem.toJSON(),
                                  });
                              })()
                            : "null",
                    )
                    .join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
