import typia from "typia";

export const test_issue_940_formdata = () => {
  const x = {
    schemas: [
      {
        type: "string",
        format: "binary",
        nullable: false,
      },
    ],
    components: {
      schemas: {},
    },
    purpose: "swagger",
    surplus: false,
  };
  const y = {
    schemas: [
      {
        type: "string",
        format: "binary",
        nullable: false,
      },
    ],
    components: {
      schemas: {},
    },
    purpose: "swagger",
    surplus: false,
  };
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): Expected => {
    const __is = (input: any): input is Expected => {
      const $io0 = (input: any): boolean =>
        "string" === input.type && "binary" === input.format;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is Expected => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("binary" === input.format ||
            $guard(
              _exceptionable,
              {
                path: _path + ".format",
                expected: '"binary"',
                value: input.format,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "Expected",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "Expected",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(x.schemas[0]);
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): Expected => {
    const __is = (input: any): input is Expected => {
      const $io0 = (input: any): boolean =>
        "string" === input.type && "binary" === input.format;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is Expected => {
        const $guard = (typia.assert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"string"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("binary" === input.format ||
            $guard(
              _exceptionable,
              {
                path: _path + ".format",
                expected: '"binary"',
                value: input.format,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "Expected",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "Expected",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(y.schemas[0]);
};
type Expected = {
  type: "string";
  format: "binary";
};
