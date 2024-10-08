import typia, { tags } from "typia";
import * as __$assertGuard from "typia/lib/internal/$assertGuard.js";
import * as __$validateReport from "typia/lib/internal/$validateReport.js";

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
export const createCamel = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    diedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  return (input: ICitizen): import("typia").CamelCase<ICitizen> =>
    $co0(input) as any;
})();
export const createAssertCamel = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertCamel",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertCamel",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        input.email,
      ) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertCamel",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      ((Math.floor(input.age) === input.age &&
        0 <= input.age &&
        input.age <= 4294967295) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertCamel",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertCamel",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertCamel",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        $ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __$assertGuard.$assertGuard(
              _exceptionable,
              {
                method: "typia.notations.createAssertCamel",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            $ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __$assertGuard.$assertGuard(
            _exceptionable,
            {
              method: "typia.notations.createAssertCamel",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertCamel",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    diedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __$assertGuard.$assertGuard(
            true,
            {
              method: "typia.notations.createAssertCamel",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          $ao0(input, _path + "", true)) ||
        __$assertGuard.$assertGuard(
          true,
          {
            method: "typia.notations.createAssertCamel",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __notation = (input: ICitizen): import("typia").CamelCase<ICitizen> =>
    $co0(input) as any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").CamelCase<ICitizen> =>
    __notation(__assert(input, errorFactory));
})();
export const createIsCamel = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    diedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  const __notation = (input: ICitizen): import("typia").CamelCase<ICitizen> =>
    $co0(input) as any;
  return (input: any): import("typia").CamelCase<ICitizen> | null => {
    if (!__is(input)) return null;
    return __notation(input);
  };
})();
export const createValidateCamel = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.id &&
        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.id,
        ) ||
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
        (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          input.email,
        ) ||
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
        ((Math.floor(input.age) === input.age &&
          0 <= input.age &&
          input.age <= 4294967295) ||
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
          $vo0(input.parent, _path + ".parent", true && _exceptionable)) ||
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
                $vo0(
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
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    diedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let errors: any;
  let $report: any;
  const __validate = (input: any): import("typia").IValidation<ICitizen> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__$validateReport.$validateReport as any)(errors);
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ICitizen",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
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
  const __notation = (input: ICitizen): import("typia").CamelCase<ICitizen> =>
    $co0(input) as any;
  return (
    input: any,
  ): import("typia").IValidation<import("typia").CamelCase<ICitizen>> => {
    const result = __validate(input) as any;
    if (result.success) result.data = __notation(input);
    return result as any;
  };
})();
export const createPascal = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $co0 = (input: any): any => ({
    Id: input.id,
    Name: input.name,
    Email: input.email,
    Age: input.age,
    Motto: input.motto,
    Birthdate: new Date(input.birthdate) as any,
    DiedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    Parent: input.parent ? $co0(input.parent) : (input.parent as any),
    Children: $cp0(input.children) as any,
  });
  return (input: ICitizen): import("typia").PascalCase<ICitizen> =>
    $co0(input) as any;
})();
export const createAssertPascal = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertPascal",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertPascal",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        input.email,
      ) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertPascal",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      ((Math.floor(input.age) === input.age &&
        0 <= input.age &&
        input.age <= 4294967295) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertPascal",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertPascal",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertPascal",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        $ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __$assertGuard.$assertGuard(
              _exceptionable,
              {
                method: "typia.notations.createAssertPascal",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            $ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __$assertGuard.$assertGuard(
            _exceptionable,
            {
              method: "typia.notations.createAssertPascal",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertPascal",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const $co0 = (input: any): any => ({
    Id: input.id,
    Name: input.name,
    Email: input.email,
    Age: input.age,
    Motto: input.motto,
    Birthdate: new Date(input.birthdate) as any,
    DiedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    Parent: input.parent ? $co0(input.parent) : (input.parent as any),
    Children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __$assertGuard.$assertGuard(
            true,
            {
              method: "typia.notations.createAssertPascal",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          $ao0(input, _path + "", true)) ||
        __$assertGuard.$assertGuard(
          true,
          {
            method: "typia.notations.createAssertPascal",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __notation = (input: ICitizen): import("typia").PascalCase<ICitizen> =>
    $co0(input) as any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").PascalCase<ICitizen> =>
    __notation(__assert(input, errorFactory));
})();
export const createIsPascal = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $co0 = (input: any): any => ({
    Id: input.id,
    Name: input.name,
    Email: input.email,
    Age: input.age,
    Motto: input.motto,
    Birthdate: new Date(input.birthdate) as any,
    DiedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    Parent: input.parent ? $co0(input.parent) : (input.parent as any),
    Children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  const __notation = (input: ICitizen): import("typia").PascalCase<ICitizen> =>
    $co0(input) as any;
  return (input: any): import("typia").PascalCase<ICitizen> | null => {
    if (!__is(input)) return null;
    return __notation(input);
  };
})();
export const createValidatePascal = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.id &&
        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.id,
        ) ||
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
        (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          input.email,
        ) ||
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
        ((Math.floor(input.age) === input.age &&
          0 <= input.age &&
          input.age <= 4294967295) ||
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
          $vo0(input.parent, _path + ".parent", true && _exceptionable)) ||
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
                $vo0(
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
  const $co0 = (input: any): any => ({
    Id: input.id,
    Name: input.name,
    Email: input.email,
    Age: input.age,
    Motto: input.motto,
    Birthdate: new Date(input.birthdate) as any,
    DiedAt: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    Parent: input.parent ? $co0(input.parent) : (input.parent as any),
    Children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let errors: any;
  let $report: any;
  const __validate = (input: any): import("typia").IValidation<ICitizen> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__$validateReport.$validateReport as any)(errors);
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ICitizen",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
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
  const __notation = (input: ICitizen): import("typia").PascalCase<ICitizen> =>
    $co0(input) as any;
  return (
    input: any,
  ): import("typia").IValidation<import("typia").PascalCase<ICitizen>> => {
    const result = __validate(input) as any;
    if (result.success) result.data = __notation(input);
    return result as any;
  };
})();
export const createSnake = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  return (input: ICitizen): import("typia").SnakeCase<ICitizen> =>
    $co0(input) as any;
})();
export const createAssertSnake = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertSnake",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertSnake",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        input.email,
      ) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertSnake",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      ((Math.floor(input.age) === input.age &&
        0 <= input.age &&
        input.age <= 4294967295) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertSnake",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertSnake",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.notations.createAssertSnake",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        $ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __$assertGuard.$assertGuard(
              _exceptionable,
              {
                method: "typia.notations.createAssertSnake",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            $ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __$assertGuard.$assertGuard(
            _exceptionable,
            {
              method: "typia.notations.createAssertSnake",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.notations.createAssertSnake",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __$assertGuard.$assertGuard(
            true,
            {
              method: "typia.notations.createAssertSnake",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          $ao0(input, _path + "", true)) ||
        __$assertGuard.$assertGuard(
          true,
          {
            method: "typia.notations.createAssertSnake",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __notation = (input: ICitizen): import("typia").SnakeCase<ICitizen> =>
    $co0(input) as any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").SnakeCase<ICitizen> =>
    __notation(__assert(input, errorFactory));
})();
export const createIsSnake = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  const __notation = (input: ICitizen): import("typia").SnakeCase<ICitizen> =>
    $co0(input) as any;
  return (input: any): import("typia").SnakeCase<ICitizen> | null => {
    if (!__is(input)) return null;
    return __notation(input);
  };
})();
export const createValidateSnake = (() => {
  const $cp0 = (input: any) => input.map((elem: any) => $co0(elem) as any);
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.id &&
        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.id,
        ) ||
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
        (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          input.email,
        ) ||
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
        ((Math.floor(input.age) === input.age &&
          0 <= input.age &&
          input.age <= 4294967295) ||
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
          $vo0(input.parent, _path + ".parent", true && _exceptionable)) ||
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
                $vo0(
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
  const $co0 = (input: any): any => ({
    id: input.id,
    name: input.name,
    email: input.email,
    age: input.age,
    motto: input.motto,
    birthdate: new Date(input.birthdate) as any,
    died_at: input.died_at ? new Date(input.died_at) : (input.died_at as any),
    parent: input.parent ? $co0(input.parent) : (input.parent as any),
    children: $cp0(input.children) as any,
  });
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let errors: any;
  let $report: any;
  const __validate = (input: any): import("typia").IValidation<ICitizen> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__$validateReport.$validateReport as any)(errors);
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ICitizen",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
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
  const __notation = (input: ICitizen): import("typia").SnakeCase<ICitizen> =>
    $co0(input) as any;
  return (
    input: any,
  ): import("typia").IValidation<import("typia").SnakeCase<ICitizen>> => {
    const result = __validate(input) as any;
    if (result.success) result.data = __notation(input);
    return result as any;
  };
})();
