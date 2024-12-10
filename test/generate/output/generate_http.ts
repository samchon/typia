import typia, { tags } from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__httpQueryParseURLSearchParams from "typia/lib/internal/_httpQueryParseURLSearchParams.js";
import * as __typia_transform__httpQueryReadBigint from "typia/lib/internal/_httpQueryReadBigint.js";
import * as __typia_transform__httpQueryReadNumber from "typia/lib/internal/_httpQueryReadNumber.js";
import * as __typia_transform__httpQueryReadString from "typia/lib/internal/_httpQueryReadString.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

interface ISomething {
  id: string & tags.Format<"uuid">;
  beta: number[];
  gamma: bigint;
}
export const query = (() => {
  return (
    input: string | import("typia").IReadableURLSearchParams,
  ): import("typia").Resolved<ISomething> => {
    input =
      __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(
        input,
      ) as import("typia").IReadableURLSearchParams;
    const output = {
      id: __typia_transform__httpQueryReadString._httpQueryReadString(
        input.get("id"),
      ),
      beta: input
        .getAll("beta")
        .map((elem: any) =>
          __typia_transform__httpQueryReadNumber._httpQueryReadNumber(elem),
        ),
      gamma: __typia_transform__httpQueryReadBigint._httpQueryReadBigint(
        input.get("gamma"),
      ),
    };
    return output as any;
  };
})();
export const isQuery = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    Array.isArray(input.beta) &&
    input.beta.every(
      (elem: any) => "number" === typeof elem && Number.isFinite(elem),
    ) &&
    "bigint" === typeof input.gamma;
  const __is = (input: any): input is ISomething =>
    "object" === typeof input && null !== input && _io0(input);
  const __decode = (
    input: string | import("typia").IReadableURLSearchParams,
  ): import("typia").Resolved<ISomething> => {
    input =
      __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(
        input,
      ) as import("typia").IReadableURLSearchParams;
    const output = {
      id: __typia_transform__httpQueryReadString._httpQueryReadString(
        input.get("id"),
      ),
      beta: input
        .getAll("beta")
        .map((elem: any) =>
          __typia_transform__httpQueryReadNumber._httpQueryReadNumber(elem),
        ),
      gamma: __typia_transform__httpQueryReadBigint._httpQueryReadBigint(
        input.get("gamma"),
      ),
    };
    return output as any;
  };
  return (
    input: string | import("typia").IReadableURLSearchParams,
  ): import("typia").Resolved<ISomething> | null => {
    const value = __decode(input);
    if (!__is(value)) return null;
    return value;
  };
})();
export const assertQuery = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    Array.isArray(input.beta) &&
    input.beta.every(
      (elem: any) => "number" === typeof elem && Number.isFinite(elem),
    ) &&
    "bigint" === typeof input.gamma;
  const _ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.http.createAssertQuery",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.http.createAssertQuery",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.beta) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.http.createAssertQuery",
          path: _path + ".beta",
          expected: "Array<number>",
          value: input.beta,
        },
        _errorFactory,
      )) &&
      input.beta.every(
        (elem: any, _index2: number) =>
          ("number" === typeof elem && Number.isFinite(elem)) ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.http.createAssertQuery",
              path: _path + ".beta[" + _index2 + "]",
              expected: "number",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.http.createAssertQuery",
          path: _path + ".beta",
          expected: "Array<number>",
          value: input.beta,
        },
        _errorFactory,
      )) &&
    ("bigint" === typeof input.gamma ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.http.createAssertQuery",
          path: _path + ".gamma",
          expected: "bigint",
          value: input.gamma,
        },
        _errorFactory,
      ));
  const __is = (input: any): input is ISomething =>
    "object" === typeof input && null !== input && _io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ISomething => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.http.createAssertQuery",
              path: _path + "",
              expected: "ISomething",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.http.createAssertQuery",
            path: _path + "",
            expected: "ISomething",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __decode = (
    input: string | import("typia").IReadableURLSearchParams,
  ): import("typia").Resolved<ISomething> => {
    input =
      __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(
        input,
      ) as import("typia").IReadableURLSearchParams;
    const output = {
      id: __typia_transform__httpQueryReadString._httpQueryReadString(
        input.get("id"),
      ),
      beta: input
        .getAll("beta")
        .map((elem: any) =>
          __typia_transform__httpQueryReadNumber._httpQueryReadNumber(elem),
        ),
      gamma: __typia_transform__httpQueryReadBigint._httpQueryReadBigint(
        input.get("gamma"),
      ),
    };
    return output as any;
  };
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Resolved<ISomething> =>
    __assert(__decode(input), errorFactory);
})();
export const validateQuery = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    Array.isArray(input.beta) &&
    input.beta.every(
      (elem: any) => "number" === typeof elem && Number.isFinite(elem),
    ) &&
    "bigint" === typeof input.gamma;
  const _vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.id &&
        (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
          _report(_exceptionable, {
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          }))) ||
        _report(_exceptionable, {
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        }),
      ((Array.isArray(input.beta) ||
        _report(_exceptionable, {
          path: _path + ".beta",
          expected: "Array<number>",
          value: input.beta,
        })) &&
        input.beta
          .map(
            (elem: any, _index2: number) =>
              ("number" === typeof elem && Number.isFinite(elem)) ||
              _report(_exceptionable, {
                path: _path + ".beta[" + _index2 + "]",
                expected: "number",
                value: elem,
              }),
          )
          .every((flag: boolean) => flag)) ||
        _report(_exceptionable, {
          path: _path + ".beta",
          expected: "Array<number>",
          value: input.beta,
        }),
      "bigint" === typeof input.gamma ||
        _report(_exceptionable, {
          path: _path + ".gamma",
          expected: "bigint",
          value: input.gamma,
        }),
    ].every((flag: boolean) => flag);
  const __is = (input: any): input is ISomething =>
    "object" === typeof input && null !== input && _io0(input);
  let errors: any;
  let _report: any;
  const __validate = (input: any): import("typia").IValidation<ISomething> => {
    if (false === __is(input)) {
      errors = [];
      _report = (__typia_transform__validateReport._validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          _report(true, {
            path: _path + "",
            expected: "ISomething",
            value: input,
          })) &&
          _vo0(input, _path + "", true)) ||
        _report(true, {
          path: _path + "",
          expected: "ISomething",
          value: input,
        }))(input, "$input", true);
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: input,
      } as any;
    }
    return {
      success: true,
      errors: [],
      data: input,
    } as any;
  };
  const __decode = (
    input: string | import("typia").IReadableURLSearchParams,
  ): import("typia").Resolved<ISomething> => {
    input =
      __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(
        input,
      ) as import("typia").IReadableURLSearchParams;
    const output = {
      id: __typia_transform__httpQueryReadString._httpQueryReadString(
        input.get("id"),
      ),
      beta: input
        .getAll("beta")
        .map((elem: any) =>
          __typia_transform__httpQueryReadNumber._httpQueryReadNumber(elem),
        ),
      gamma: __typia_transform__httpQueryReadBigint._httpQueryReadBigint(
        input.get("gamma"),
      ),
    };
    return output as any;
  };
  return (
    input: string | import("typia").IReadableURLSearchParams,
  ): import("typia").IValidation<import("typia").Resolved<ISomething>> =>
    __validate(__decode(input));
})();
