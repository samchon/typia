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
    const $guard = (typia.assert as any).guard;
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
                if ("Error happens something1." === input.data)
                    return $ao0(input, _path, true && _exceptionable);
                if ("Error happens something2." === input.data)
                    return $ao1(input, _path, true && _exceptionable);
                if ("Error happens something3." === input.data)
                    return $ao2(input, _path, true && _exceptionable);
                if ("Error happens something4." === input.data)
                    return $ao3(input, _path, true && _exceptionable);
                if ("Error happens something5." === input.data)
                    return $ao4(input, _path, true && _exceptionable);
                if (true === input.result)
                    return $ao5(input, _path, true && _exceptionable);
                return $guard(_exceptionable, {
                    path: _path,
                    expected:
                        "(__object | __object.o1 | __object.o2 | __object.o3 | __object.o4 | ResponseForm<true>)",
                    value: input,
                });
            })();
        return (
            (("object" === typeof input && null !== input) ||
                $guard(true, {
                    path: _path + "",
                    expected:
                        "(Resolve<ResponseForm<true>> | Resolve<__object.o1> | Resolve<__object.o2> | Resolve<__object.o3> | Resolve<__object.o4> | Resolve<__object>)",
                    value: input,
                })) &&
            $au0(input, _path + "", true)
        );
    })(input, "$input", true);
    return input;
})(input);
