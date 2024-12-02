import typia, { tags } from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

interface ICitizen {
  id: string & tags.Format<"uuid">;
  name: string & tags.Pattern<"^[A-Z][a-z]+$">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.ExclusiveMaximum<100>;
  motto: string;
  birthdate: Date;
  died_at: null | Date;
  parent: ICitizen | null;
  children: ICitizen[];
}
export const createClone = (() => {
  const _cp0 = (input: any) => input.map((elem: any) => _co0(elem) as any);
  const _co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? _co0(input.parent) : (input.parent as any),
    children: _cp0(input.children) as any,
  });
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
  return (input: ICitizen): import("typia").Resolved<ICitizen> =>
    _co0(input) as any;
})();
export const createAssertClone = (() => {
  const _cp0 = (input: any) => input.map((elem: any) => _co0(elem) as any);
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
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
            method: "typia.misc.createAssertClone",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertClone",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (__typia_transform__isFormatEmail._isFormatEmail(input.email) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertClone",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      (__typia_transform__isTypeUint32._isTypeUint32(input.age) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertClone",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertClone",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertClone",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        _ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __typia_transform__assertGuard._assertGuard(
              _exceptionable,
              {
                method: "typia.misc.createAssertClone",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            _ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.misc.createAssertClone",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertClone",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const _co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? _co0(input.parent) : (input.parent as any),
    children: _cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && _io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.misc.createAssertClone",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.misc.createAssertClone",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __clone = (input: ICitizen): import("typia").Resolved<ICitizen> =>
    _co0(input) as any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Resolved<ICitizen> =>
    __clone(__assert(input, errorFactory));
})();
export const createIsClone = (() => {
  const _cp0 = (input: any) => input.map((elem: any) => _co0(elem) as any);
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
  const _co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? _co0(input.parent) : (input.parent as any),
    children: _cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && _io0(input);
  const __clone = (input: ICitizen): import("typia").Resolved<ICitizen> =>
    _co0(input) as any;
  return (input: any): import("typia").Resolved<ICitizen> | null => {
    if (!__is(input)) return null;
    return __clone(input);
  };
})();
export const createValidateClone = (() => {
  const _cp0 = (input: any) => input.map((elem: any) => _co0(elem) as any);
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
  const _vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.id &&
        (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
          $report(_exceptionable, {
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        }),
      ("string" === typeof input.name &&
        (RegExp("^[A-Z][a-z]+$").test(input.name) ||
          $report(_exceptionable, {
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        }),
      ("string" === typeof input.email &&
        (__typia_transform__isFormatEmail._isFormatEmail(input.email) ||
          $report(_exceptionable, {
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        }),
      ("number" === typeof input.age &&
        (__typia_transform__isTypeUint32._isTypeUint32(input.age) ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          })) &&
        (input.age < 100 ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        }),
      "string" === typeof input.motto ||
        $report(_exceptionable, {
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        }),
      input.birthdate instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        }),
      null === input.died_at ||
        input.died_at instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        }),
      null === input.parent ||
        ((("object" === typeof input.parent && null !== input.parent) ||
          $report(_exceptionable, {
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          })) &&
          _vo0(input.parent, _path + ".parent", true && _exceptionable)) ||
        $report(_exceptionable, {
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        }),
      ((Array.isArray(input.children) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        })) &&
        input.children
          .map(
            (elem: any, _index2: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $report(_exceptionable, {
                  path: _path + ".children[" + _index2 + "]",
                  expected: "ICitizen",
                  value: elem,
                })) &&
                _vo0(
                  elem,
                  _path + ".children[" + _index2 + "]",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              }),
          )
          .every((flag: boolean) => flag)) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        }),
    ].every((flag: boolean) => flag);
  const _co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? _co0(input.parent) : (input.parent as any),
    children: _cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && _io0(input);
  let errors: any;
  let $report: any;
  const __validate = (input: any): import("typia").IValidation<ICitizen> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__typia_transform__validateReport._validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ICitizen",
            value: input,
          })) &&
          _vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "ICitizen",
          value: input,
        }))(input, "$input", true);
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    }
    return {
      success: true,
      errors: [],
      data: input,
    } as any;
  };
  const __clone = (input: ICitizen): import("typia").Resolved<ICitizen> =>
    _co0(input) as any;
  return (
    input: any,
  ): import("typia").IValidation<import("typia").Resolved<ICitizen>> => {
    const result = __validate(input) as any;
    if (result.success) result.data = __clone(input);
    return result;
  };
})();
export const createPrune = (() => {
  const _pp0 = (input: any) =>
    input.forEach((elem: any) => {
      if ("object" === typeof elem && null !== elem) _po0(elem);
    });
  const _po0 = (input: any): any => {
    if ("object" === typeof input.parent && null !== input.parent)
      _po0(input.parent);
    if (Array.isArray(input.children)) _pp0(input.children);
    for (const key of Object.keys(input)) {
      if (
        "id" === key ||
        "name" === key ||
        "email" === key ||
        "age" === key ||
        "motto" === key ||
        "birthdate" === key ||
        "died_at" === key ||
        "parent" === key ||
        "children" === key
      )
        continue;
      delete input[key];
    }
  };
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
  return (input: ICitizen): void => {
    if ("object" === typeof input && null !== input) _po0(input);
  };
})();
export const createAssertPrune = (() => {
  const _pp0 = (input: any) =>
    input.forEach((elem: any) => {
      if ("object" === typeof elem && null !== elem) _po0(elem);
    });
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
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
            method: "typia.misc.createAssertPrune",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertPrune",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (__typia_transform__isFormatEmail._isFormatEmail(input.email) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertPrune",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      (__typia_transform__isTypeUint32._isTypeUint32(input.age) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertPrune",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertPrune",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.createAssertPrune",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        _ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __typia_transform__assertGuard._assertGuard(
              _exceptionable,
              {
                method: "typia.misc.createAssertPrune",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            _ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.misc.createAssertPrune",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.createAssertPrune",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const _po0 = (input: any): any => {
    if ("object" === typeof input.parent && null !== input.parent)
      _po0(input.parent);
    if (Array.isArray(input.children)) _pp0(input.children);
    for (const key of Object.keys(input)) {
      if (
        "id" === key ||
        "name" === key ||
        "email" === key ||
        "age" === key ||
        "motto" === key ||
        "birthdate" === key ||
        "died_at" === key ||
        "parent" === key ||
        "children" === key
      )
        continue;
      delete input[key];
    }
  };
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && _io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.misc.createAssertPrune",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.misc.createAssertPrune",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __prune = (input: ICitizen): void => {
    if ("object" === typeof input && null !== input) _po0(input);
  };
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    input = __assert(input, errorFactory);
    __prune(input);
    return input;
  };
})();
export const createIsPrune = (() => {
  const _pp0 = (input: any) =>
    input.forEach((elem: any) => {
      if ("object" === typeof elem && null !== elem) _po0(elem);
    });
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
  const _po0 = (input: any): any => {
    if ("object" === typeof input.parent && null !== input.parent)
      _po0(input.parent);
    if (Array.isArray(input.children)) _pp0(input.children);
    for (const key of Object.keys(input)) {
      if (
        "id" === key ||
        "name" === key ||
        "email" === key ||
        "age" === key ||
        "motto" === key ||
        "birthdate" === key ||
        "died_at" === key ||
        "parent" === key ||
        "children" === key
      )
        continue;
      delete input[key];
    }
  };
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && _io0(input);
  const __prune = (input: ICitizen): void => {
    if ("object" === typeof input && null !== input) _po0(input);
  };
  return (input: any): input is ICitizen => {
    if (false == __is(input)) return false;
    __prune(input);
    return true;
  };
})();
export const createValidatePrune = (() => {
  const _pp0 = (input: any) =>
    input.forEach((elem: any) => {
      if ("object" === typeof elem && null !== elem) _po0(elem);
    });
  const _io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        _io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && _io0(elem),
    );
  const _vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.id &&
        (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
          $report(_exceptionable, {
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        }),
      ("string" === typeof input.name &&
        (RegExp("^[A-Z][a-z]+$").test(input.name) ||
          $report(_exceptionable, {
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        }),
      ("string" === typeof input.email &&
        (__typia_transform__isFormatEmail._isFormatEmail(input.email) ||
          $report(_exceptionable, {
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        }),
      ("number" === typeof input.age &&
        (__typia_transform__isTypeUint32._isTypeUint32(input.age) ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          })) &&
        (input.age < 100 ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        }),
      "string" === typeof input.motto ||
        $report(_exceptionable, {
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        }),
      input.birthdate instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        }),
      null === input.died_at ||
        input.died_at instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        }),
      null === input.parent ||
        ((("object" === typeof input.parent && null !== input.parent) ||
          $report(_exceptionable, {
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          })) &&
          _vo0(input.parent, _path + ".parent", true && _exceptionable)) ||
        $report(_exceptionable, {
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        }),
      ((Array.isArray(input.children) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        })) &&
        input.children
          .map(
            (elem: any, _index2: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $report(_exceptionable, {
                  path: _path + ".children[" + _index2 + "]",
                  expected: "ICitizen",
                  value: elem,
                })) &&
                _vo0(
                  elem,
                  _path + ".children[" + _index2 + "]",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              }),
          )
          .every((flag: boolean) => flag)) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        }),
    ].every((flag: boolean) => flag);
  const _po0 = (input: any): any => {
    if ("object" === typeof input.parent && null !== input.parent)
      _po0(input.parent);
    if (Array.isArray(input.children)) _pp0(input.children);
    for (const key of Object.keys(input)) {
      if (
        "id" === key ||
        "name" === key ||
        "email" === key ||
        "age" === key ||
        "motto" === key ||
        "birthdate" === key ||
        "died_at" === key ||
        "parent" === key ||
        "children" === key
      )
        continue;
      delete input[key];
    }
  };
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && _io0(input);
  let errors: any;
  let $report: any;
  const __validate = (input: any): import("typia").IValidation<ICitizen> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__typia_transform__validateReport._validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ICitizen",
            value: input,
          })) &&
          _vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "ICitizen",
          value: input,
        }))(input, "$input", true);
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    }
    return {
      success: true,
      errors: [],
      data: input,
    } as any;
  };
  const __prune = (input: ICitizen): void => {
    if ("object" === typeof input && null !== input) _po0(input);
  };
  return (input: any): import("typia").IValidation<ICitizen> => {
    const result = __validate(input);
    if (result.success) __prune(input);
    return result;
  };
})();
export const literals = [false, 1, "two"] as const;
