import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_validateStringify_ToJsonAtomicUnion = _test_validateStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) =>
        ((
            input: Array<ToJsonAtomicUnion.IToJson>,
        ): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<ToJsonAtomicUnion.IToJson>> => {
                const __is = (
                    input: any,
                ): input is Array<ToJsonAtomicUnion.IToJson> => {
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
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ToJsonAtomicUnion.IToJson> => {
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
                                    expected:
                                        "Array<ToJsonAtomicUnion.IToJson>",
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
                                expected: "Array<ToJsonAtomicUnion.IToJson>",
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
            const stringify = (
                input: Array<ToJsonAtomicUnion.IToJson>,
            ): string => {
                const $string = (typia.validateStringify as any).string;
                const $number = (typia.validateStringify as any).number;
                const $throws = (typia.validateStringify as any).throws;
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
        })(input),
);
