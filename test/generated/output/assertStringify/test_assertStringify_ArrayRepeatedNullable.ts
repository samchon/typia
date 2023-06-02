import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_assertStringify_ArrayRepeatedNullable = _test_assertStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (
                input: any,
            ): string | number | Array<ArrayRepeatedNullable> | null => {
                const __is: any = (
                    input: any,
                ): input is
                    | string
                    | number
                    | Array<ArrayRepeatedNullable>
                    | null => {
                    const $ia0: any = (input: any): any =>
                        input.every(
                            (elem: any) =>
                                undefined !== elem &&
                                (null === elem ||
                                    "string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    (Array.isArray(elem) && $ia0(elem))),
                        );
                    return (
                        undefined !== input &&
                        (null === input ||
                            "string" === typeof input ||
                            ("number" === typeof input &&
                                Number.isFinite(input)) ||
                            (Array.isArray(input) && $ia0(input)))
                    );
                };
                const $guard: any = (typia.assertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is
                        | string
                        | number
                        | Array<ArrayRepeatedNullable>
                        | null => {
                        const $aa0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            input.every(
                                (elem: any, _index1: number) =>
                                    (undefined !== elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<ArrayRepeatedNullable> | null | number | string)",
                                            value: elem,
                                        })) &&
                                    (null === elem ||
                                        "string" === typeof elem ||
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                value: elem,
                                            })) &&
                                            $aa0(
                                                elem,
                                                _path,
                                                true && _exceptionable,
                                            ))),
                            );
                        return (
                            (undefined !== input ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                    value: input,
                                })) &&
                            (null === input ||
                                "string" === typeof input ||
                                ("number" === typeof input &&
                                    Number.isFinite(input)) ||
                                ((Array.isArray(input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                        value: input,
                                    })) &&
                                    $aa0(input, _path, true && _exceptionable)))
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (
                input: string | number | Array<ArrayRepeatedNullable> | null,
            ): string => {
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            undefined !== elem &&
                            (null === elem ||
                                "string" === typeof elem ||
                                "number" === typeof elem ||
                                (Array.isArray(elem) && $ia0(elem))),
                    );
                const $string: any = (typia.assertStringify as any).string;
                const $number: any = (typia.assertStringify as any).number;
                const $throws: any = (typia.assertStringify as any).throws;
                const $sp0: any = (input: any) => $sa0(input);
                const $sa0: any = (input: any): any =>
                    `[${input
                        .map((elem: any) =>
                            null !== elem
                                ? (() => {
                                      if ("string" === typeof elem)
                                          return $string(elem);
                                      if ("number" === typeof elem)
                                          return $number(elem);
                                      if (Array.isArray(elem))
                                          return $sp0(elem);
                                      $throws({
                                          expected:
                                              "(Array<ArrayRepeatedNullable> | null | number | string)",
                                          value: elem,
                                      });
                                  })()
                                : "null",
                        )
                        .join(",")}]`;
                return null !== input
                    ? (() => {
                          if ("string" === typeof input) return $string(input);
                          if ("number" === typeof input)
                              return $number(input).toString();
                          if (Array.isArray(input)) return $sp0(input);
                          $throws({
                              expected:
                                  "(Array<ArrayRepeatedNullable> | null | number | string)",
                              value: input,
                          });
                      })()
                    : "null";
            };
            return stringify(assert(input));
        })(input),
    ArrayRepeatedNullable.SPOILERS,
);
