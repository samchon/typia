import typia, { tags } from "typia";
import * as __$assertGuard from "typia/lib/internal/$assertGuard.js";
import * as __$jsonStringifyNumber from "typia/lib/internal/$jsonStringifyNumber.js";
import * as __$jsonStringifyString from "typia/lib/internal/$jsonStringifyString.js";
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
export const createStringify = (() => {
  const $so0 = (input: any): any =>
    `{"id":${__$jsonStringifyString.$jsonStringifyString(input.id)},"name":${__$jsonStringifyString.$jsonStringifyString(input.name)},"email":${__$jsonStringifyString.$jsonStringifyString(input.email)},"age":${__$jsonStringifyNumber.$jsonStringifyNumber(input.age)},"motto":${__$jsonStringifyString.$jsonStringifyString(input.motto)},"birthdate":${__$jsonStringifyString.$jsonStringifyString(input.birthdate.toJSON())},"died_at":${null !== input.died_at ? __$jsonStringifyString.$jsonStringifyString(input.died_at.toJSON()) : "null"},"parent":${null !== input.parent ? $so0(input.parent) : "null"},"children":${`[${input.children.map((elem: any) => $so0(elem)).join(",")}]`}}`;
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
  return (input: ICitizen): string => $so0(input);
})();
export const createIsStringify = (() => {
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
  const $so0 = (input: any): any =>
    `{"id":${__$jsonStringifyString.$jsonStringifyString(input.id)},"name":${__$jsonStringifyString.$jsonStringifyString(input.name)},"email":${__$jsonStringifyString.$jsonStringifyString(input.email)},"age":${__$jsonStringifyNumber.$jsonStringifyNumber(input.age)},"motto":${__$jsonStringifyString.$jsonStringifyString(input.motto)},"birthdate":${__$jsonStringifyString.$jsonStringifyString(input.birthdate.toJSON())},"died_at":${null !== input.died_at ? __$jsonStringifyString.$jsonStringifyString(input.died_at.toJSON()) : "null"},"parent":${null !== input.parent ? $so0(input.parent) : "null"},"children":${`[${input.children.map((elem: any) => $so0(elem)).join(",")}]`}}`;
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  const __stringify = (input: ICitizen): string => $so0(input);
  return (input: any): string | null =>
    __is(input) ? __stringify(input) : null;
})();
export const createAssertStringify = (() => {
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
            method: "typia.json.createAssertStringify",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
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
          method: "typia.json.createAssertStringify",
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
          method: "typia.json.createAssertStringify",
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
          method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
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
          method: "typia.json.createAssertStringify",
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
          method: "typia.json.createAssertStringify",
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
                method: "typia.json.createAssertStringify",
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
              method: "typia.json.createAssertStringify",
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
          method: "typia.json.createAssertStringify",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const $so0 = (input: any): any =>
    `{"id":${__$jsonStringifyString.$jsonStringifyString(input.id)},"name":${__$jsonStringifyString.$jsonStringifyString(input.name)},"email":${__$jsonStringifyString.$jsonStringifyString(input.email)},"age":${__$jsonStringifyNumber.$jsonStringifyNumber(input.age)},"motto":${__$jsonStringifyString.$jsonStringifyString(input.motto)},"birthdate":${__$jsonStringifyString.$jsonStringifyString(input.birthdate.toJSON())},"died_at":${null !== input.died_at ? __$jsonStringifyString.$jsonStringifyString(input.died_at.toJSON()) : "null"},"parent":${null !== input.parent ? $so0(input.parent) : "null"},"children":${`[${input.children.map((elem: any) => $so0(elem)).join(",")}]`}}`;
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
              method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __stringify = (input: ICitizen): string => $so0(input);
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): string => {
    __assert(input, errorFactory);
    return __stringify(input);
  };
})();
export const createValidateStringify = (() => {
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
  const $so0 = (input: any): any =>
    `{"id":${__$jsonStringifyString.$jsonStringifyString(input.id)},"name":${__$jsonStringifyString.$jsonStringifyString(input.name)},"email":${__$jsonStringifyString.$jsonStringifyString(input.email)},"age":${__$jsonStringifyNumber.$jsonStringifyNumber(input.age)},"motto":${__$jsonStringifyString.$jsonStringifyString(input.motto)},"birthdate":${__$jsonStringifyString.$jsonStringifyString(input.birthdate.toJSON())},"died_at":${null !== input.died_at ? __$jsonStringifyString.$jsonStringifyString(input.died_at.toJSON()) : "null"},"parent":${null !== input.parent ? $so0(input.parent) : "null"},"children":${`[${input.children.map((elem: any) => $so0(elem)).join(",")}]`}}`;
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
  const __stringify = (input: ICitizen): string => $so0(input);
  return (input: any): import("typia").IValidation<string> => {
    const result = __validate(input) as any;
    if (result.success) result.data = __stringify(input);
    return result;
  };
})();
export const createIsParse = (() => {
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
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  return (input: string): import("typia").Primitive<ICitizen> | null => {
    input = JSON.parse(input);
    return __is(input) ? (input as any) : null;
  };
})();
export const createAssertParse = (() => {
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
            method: "typia.json.createAssertParse",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertParse",
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
            method: "typia.json.createAssertParse",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertParse",
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
            method: "typia.json.createAssertParse",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertParse",
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
            method: "typia.json.createAssertParse",
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
            method: "typia.json.createAssertParse",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertParse",
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
          method: "typia.json.createAssertParse",
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
          method: "typia.json.createAssertParse",
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
          method: "typia.json.createAssertParse",
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
            method: "typia.json.createAssertParse",
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
          method: "typia.json.createAssertParse",
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
          method: "typia.json.createAssertParse",
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
                method: "typia.json.createAssertParse",
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
              method: "typia.json.createAssertParse",
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
          method: "typia.json.createAssertParse",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
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
              method: "typia.json.createAssertParse",
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
            method: "typia.json.createAssertParse",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  return (
    input: string,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Primitive<ICitizen> =>
    __assert(JSON.parse(input), errorFactory) as any;
})();
export const createValidateParse = (() => {
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
  return (
    input: string,
  ): import("typia").IValidation<import("typia").Primitive<ICitizen>> =>
    __validate(JSON.parse(input)) as any;
})();
