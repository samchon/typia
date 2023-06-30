import typia from "../../../src";

const ERROR = {
    TOO_LONG_KEY_NAME1: {
        result: false,
        code: 4000,
        data: "Error happens something1.",
    },
    TOO_LONG_KEY_NAME2: {
        result: false,
        code: 4000,
        data: "Error happens something2.",
    },
    TOO_LONG_KEY_NAME3: {
        result: false,
        code: 4000,
        data: "Error happens something3.",
    },
    TOO_LONG_KEY_NAME4: {
        result: false,
        code: 4000,
        data: "Error happens something4.",
    },
    TOO_LONG_KEY_NAME5: {
        result: false,
        code: 4000,
        data: "Error happens something5.",
    },
} as const;
type KeyOfError = keyof typeof ERROR;
type ValueOfError = (typeof ERROR)[KeyOfError];
interface ResponseForm<T> {
    result: true;
    code: 1000;
    data: T;
}
type Try<T, E extends ValueOfError> = ResponseForm<T> | E;
const input: Try<
    true,
    | typeof ERROR.TOO_LONG_KEY_NAME1
    | typeof ERROR.TOO_LONG_KEY_NAME2
    | typeof ERROR.TOO_LONG_KEY_NAME3
    | typeof ERROR.TOO_LONG_KEY_NAME4
    | typeof ERROR.TOO_LONG_KEY_NAME5
> = {} as any;
((
    input: any,
):
    | {
          readonly result: false;
          readonly code: 4000;
          readonly data: "Error happens something1.";
      }
    | {
          readonly result: false;
          readonly code: 4000;
          readonly data: "Error happens something2.";
      }
    | {
          readonly result: false;
          readonly code: 4000;
          readonly data: "Error happens something3.";
      }
    | {
          readonly result: false;
          readonly code: 4000;
          readonly data: "Error happens something4.";
      }
    | {
          readonly result: false;
          readonly code: 4000;
          readonly data: "Error happens something5.";
      }
    | ResponseForm<true> => {
    const __is = (
        input: any,
    ): input is
        | {
              readonly result: false;
              readonly code: 4000;
              readonly data: "Error happens something1.";
          }
        | {
              readonly result: false;
              readonly code: 4000;
              readonly data: "Error happens something2.";
          }
        | {
              readonly result: false;
              readonly code: 4000;
              readonly data: "Error happens something3.";
          }
        | {
              readonly result: false;
              readonly code: 4000;
              readonly data: "Error happens something4.";
          }
        | {
              readonly result: false;
              readonly code: 4000;
              readonly data: "Error happens something5.";
          }
        | ResponseForm<true> => {
        const $io0 = (input: any): boolean =>
            false === input.result &&
            4000 === input.code &&
            "Error happens something1." === input.data;
        const $io1 = (input: any): boolean =>
            false === input.result &&
            4000 === input.code &&
            "Error happens something2." === input.data;
        const $io2 = (input: any): boolean =>
            false === input.result &&
            4000 === input.code &&
            "Error happens something3." === input.data;
        const $io3 = (input: any): boolean =>
            false === input.result &&
            4000 === input.code &&
            "Error happens something4." === input.data;
        const $io4 = (input: any): boolean =>
            false === input.result &&
            4000 === input.code &&
            "Error happens something5." === input.data;
        const $io5 = (input: any): boolean =>
            true === input.result && 1000 === input.code && true === input.data;
        const $iu0 = (input: any): any =>
            (() => {
                if (true === input.result) return $io5(input);
                if ("Error happens something5." === input.data)
                    return $io4(input);
                if ("Error happens something4." === input.data)
                    return $io3(input);
                if ("Error happens something3." === input.data)
                    return $io2(input);
                if ("Error happens something2." === input.data)
                    return $io1(input);
                if ("Error happens something1." === input.data)
                    return $io0(input);
                return false;
            })();
        return "object" === typeof input && null !== input && $iu0(input);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is
            | {
                  readonly result: false;
                  readonly code: 4000;
                  readonly data: "Error happens something1.";
              }
            | {
                  readonly result: false;
                  readonly code: 4000;
                  readonly data: "Error happens something2.";
              }
            | {
                  readonly result: false;
                  readonly code: 4000;
                  readonly data: "Error happens something3.";
              }
            | {
                  readonly result: false;
                  readonly code: 4000;
                  readonly data: "Error happens something4.";
              }
            | {
                  readonly result: false;
                  readonly code: 4000;
                  readonly data: "Error happens something5.";
              }
            | ResponseForm<true> => {
            const $guard = (typia.assert as any).guard;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (false === input.result ||
                    $guard(_exceptionable, {
                        path: _path + ".result",
                        expected: "false",
                        value: input.result,
                    })) &&
                (4000 === input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "4000",
                        value: input.code,
                    })) &&
                ("Error happens something1." === input.data ||
                    $guard(_exceptionable, {
                        path: _path + ".data",
                        expected: '"Error happens something1."',
                        value: input.data,
                    }));
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (false === input.result ||
                    $guard(_exceptionable, {
                        path: _path + ".result",
                        expected: "false",
                        value: input.result,
                    })) &&
                (4000 === input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "4000",
                        value: input.code,
                    })) &&
                ("Error happens something2." === input.data ||
                    $guard(_exceptionable, {
                        path: _path + ".data",
                        expected: '"Error happens something2."',
                        value: input.data,
                    }));
            const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (false === input.result ||
                    $guard(_exceptionable, {
                        path: _path + ".result",
                        expected: "false",
                        value: input.result,
                    })) &&
                (4000 === input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "4000",
                        value: input.code,
                    })) &&
                ("Error happens something3." === input.data ||
                    $guard(_exceptionable, {
                        path: _path + ".data",
                        expected: '"Error happens something3."',
                        value: input.data,
                    }));
            const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (false === input.result ||
                    $guard(_exceptionable, {
                        path: _path + ".result",
                        expected: "false",
                        value: input.result,
                    })) &&
                (4000 === input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "4000",
                        value: input.code,
                    })) &&
                ("Error happens something4." === input.data ||
                    $guard(_exceptionable, {
                        path: _path + ".data",
                        expected: '"Error happens something4."',
                        value: input.data,
                    }));
            const $ao4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (false === input.result ||
                    $guard(_exceptionable, {
                        path: _path + ".result",
                        expected: "false",
                        value: input.result,
                    })) &&
                (4000 === input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "4000",
                        value: input.code,
                    })) &&
                ("Error happens something5." === input.data ||
                    $guard(_exceptionable, {
                        path: _path + ".data",
                        expected: '"Error happens something5."',
                        value: input.data,
                    }));
            const $ao5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (true === input.result ||
                    $guard(_exceptionable, {
                        path: _path + ".result",
                        expected: "true",
                        value: input.result,
                    })) &&
                (1000 === input.code ||
                    $guard(_exceptionable, {
                        path: _path + ".code",
                        expected: "1000",
                        value: input.code,
                    })) &&
                (true === input.data ||
                    $guard(_exceptionable, {
                        path: _path + ".data",
                        expected: "true",
                        value: input.data,
                    }));
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if (true === input.result)
                        return $ao5(input, _path, true && _exceptionable);
                    if ("Error happens something5." === input.data)
                        return $ao4(input, _path, true && _exceptionable);
                    if ("Error happens something4." === input.data)
                        return $ao3(input, _path, true && _exceptionable);
                    if ("Error happens something3." === input.data)
                        return $ao2(input, _path, true && _exceptionable);
                    if ("Error happens something2." === input.data)
                        return $ao1(input, _path, true && _exceptionable);
                    if ("Error happens something1." === input.data)
                        return $ao0(input, _path, true && _exceptionable);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "(ResponseForm<true> | __object.o4 | __object.o3 | __object.o2 | __object.o1 | __object)",
                        value: input,
                    });
                })();
            return (
                ((("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "(ResponseForm<true> | __object | __object.o1 | __object.o2 | __object.o3 | __object.o4)",
                        value: input,
                    })) &&
                    $au0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected:
                        "(ResponseForm<true> | __object | __object.o1 | __object.o2 | __object.o3 | __object.o4)",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
})(input);
