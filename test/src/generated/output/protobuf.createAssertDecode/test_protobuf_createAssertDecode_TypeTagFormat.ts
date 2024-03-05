import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_protobuf_createAssertDecode_TypeTagFormat =
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )({
    decode: (
      input: Uint8Array,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<TypeTagFormat> => {
      const decode = (
        input: Uint8Array,
      ): import("typia").Resolved<TypeTagFormat> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            byte: "" as any,
            password: "" as any,
            regex: "" as any,
            uuid: "" as any,
            email: "" as any,
            hostname: "" as any,
            idnEmail: "" as any,
            idnHostname: "" as any,
            iri: "" as any,
            iriReference: "" as any,
            ipv4: "" as any,
            ipv6: "" as any,
            uri: "" as any,
            uriReference: "" as any,
            uriTemplate: "" as any,
            url: "" as any,
            datetime: "" as any,
            date: "" as any,
            time: "" as any,
            duration: "" as any,
            jsonPointer: "" as any,
            relativeJsonPointer: "" as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // string;
                output.byte = reader.string();
                break;
              case 2:
                // string;
                output.password = reader.string();
                break;
              case 3:
                // string;
                output.regex = reader.string();
                break;
              case 4:
                // string;
                output.uuid = reader.string();
                break;
              case 5:
                // string;
                output.email = reader.string();
                break;
              case 6:
                // string;
                output.hostname = reader.string();
                break;
              case 7:
                // string;
                output.idnEmail = reader.string();
                break;
              case 8:
                // string;
                output.idnHostname = reader.string();
                break;
              case 9:
                // string;
                output.iri = reader.string();
                break;
              case 10:
                // string;
                output.iriReference = reader.string();
                break;
              case 11:
                // string;
                output.ipv4 = reader.string();
                break;
              case 12:
                // string;
                output.ipv6 = reader.string();
                break;
              case 13:
                // string;
                output.uri = reader.string();
                break;
              case 14:
                // string;
                output.uriReference = reader.string();
                break;
              case 15:
                // string;
                output.uriTemplate = reader.string();
                break;
              case 16:
                // string;
                output.url = reader.string();
                break;
              case 17:
                // string;
                output.datetime = reader.string();
                break;
              case 18:
                // string;
                output.date = reader.string();
                break;
              case 19:
                // string;
                output.time = reader.string();
                break;
              case 20:
                // string;
                output.duration = reader.string();
                break;
              case 21:
                // string;
                output.jsonPointer = reader.string();
                break;
              case 22:
                // string;
                output.relativeJsonPointer = reader.string();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
      };
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): TypeTagFormat => {
        const __is = (input: any): input is TypeTagFormat => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.byte &&
            /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm.test(
              input.byte,
            ) &&
            "string" === typeof input.password &&
            true &&
            "string" === typeof input.regex &&
            (() => {
              try {
                new RegExp(input.regex);
                return true;
              } catch {
                return false;
              }
            })() &&
            "string" === typeof input.uuid &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.uuid,
            ) &&
            "string" === typeof input.email &&
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
              input.email,
            ) &&
            "string" === typeof input.hostname &&
            /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i.test(
              input.hostname,
            ) &&
            "string" === typeof input.idnEmail &&
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              input.idnEmail,
            ) &&
            "string" === typeof input.idnHostname &&
            /^([a-z0-9\u00a1-\uffff0-9]+(-[a-z0-9\u00a1-\uffff0-9]+)*\.)+[a-z\u00a1-\uffff]{2,}$/i.test(
              input.idnHostname,
            ) &&
            "string" === typeof input.iri &&
            /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
              input.iri,
            ) &&
            "string" === typeof input.iriReference &&
            /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
              input.iriReference,
            ) &&
            "string" === typeof input.ipv4 &&
            /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/.test(
              input.ipv4,
            ) &&
            "string" === typeof input.ipv6 &&
            /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))$/i.test(
              input.ipv6,
            ) &&
            "string" === typeof input.uri &&
            /\/|:/.test(input.uri) &&
            /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
              input.uri,
            ) &&
            "string" === typeof input.uriReference &&
            /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
              input.uriReference,
            ) &&
            "string" === typeof input.uriTemplate &&
            /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i.test(
              input.uriTemplate,
            ) &&
            "string" === typeof input.url &&
            /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu.test(
              input.url,
            ) &&
            "string" === typeof input.datetime &&
            !isNaN(new Date(input.datetime).getTime()) &&
            "string" === typeof input.date &&
            /^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) &&
            "string" === typeof input.time &&
            /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
              input.time,
            ) &&
            "string" === typeof input.duration &&
            /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
              input.duration,
            ) &&
            "string" === typeof input.jsonPointer &&
            /^(?:\/(?:[^~/]|~0|~1)*)*$/.test(input.jsonPointer) &&
            "string" === typeof input.relativeJsonPointer &&
            /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/.test(
              input.relativeJsonPointer,
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagFormat => {
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.byte &&
                (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm.test(
                  input.byte,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".byte",
                      expected: 'string & Format<"byte">',
                      value: input.byte,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".byte",
                    expected: '(string & Format<"byte">)',
                    value: input.byte,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.password &&
                (true ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".password",
                      expected: 'string & Format<"password">',
                      value: input.password,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".password",
                    expected: '(string & Format<"password">)',
                    value: input.password,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.regex &&
                ((() => {
                  try {
                    new RegExp(input.regex);
                    return true;
                  } catch {
                    return false;
                  }
                })() ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".regex",
                      expected: 'string & Format<"regex">',
                      value: input.regex,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".regex",
                    expected: '(string & Format<"regex">)',
                    value: input.regex,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.uuid &&
                (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.uuid,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uuid",
                      expected: 'string & Format<"uuid">',
                      value: input.uuid,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uuid",
                    expected: '(string & Format<"uuid">)',
                    value: input.uuid,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.email &&
                (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                  input.email,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".email",
                      expected: 'string & Format<"email">',
                      value: input.email,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".email",
                    expected: '(string & Format<"email">)',
                    value: input.email,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.hostname &&
                (/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i.test(
                  input.hostname,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".hostname",
                      expected: 'string & Format<"hostname">',
                      value: input.hostname,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".hostname",
                    expected: '(string & Format<"hostname">)',
                    value: input.hostname,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.idnEmail &&
                (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                  input.idnEmail,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".idnEmail",
                      expected: 'string & Format<"idn-email">',
                      value: input.idnEmail,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".idnEmail",
                    expected: '(string & Format<"idn-email">)',
                    value: input.idnEmail,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.idnHostname &&
                (/^([a-z0-9\u00a1-\uffff0-9]+(-[a-z0-9\u00a1-\uffff0-9]+)*\.)+[a-z\u00a1-\uffff]{2,}$/i.test(
                  input.idnHostname,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".idnHostname",
                      expected: 'string & Format<"idn-hostname">',
                      value: input.idnHostname,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".idnHostname",
                    expected: '(string & Format<"idn-hostname">)',
                    value: input.idnHostname,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.iri &&
                (/^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
                  input.iri,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".iri",
                      expected: 'string & Format<"iri">',
                      value: input.iri,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".iri",
                    expected: '(string & Format<"iri">)',
                    value: input.iri,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.iriReference &&
                (/^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u.test(
                  input.iriReference,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".iriReference",
                      expected: 'string & Format<"iri-reference">',
                      value: input.iriReference,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".iriReference",
                    expected: '(string & Format<"iri-reference">)',
                    value: input.iriReference,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.ipv4 &&
                (/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/.test(
                  input.ipv4,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".ipv4",
                      expected: 'string & Format<"ipv4">',
                      value: input.ipv4,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".ipv4",
                    expected: '(string & Format<"ipv4">)',
                    value: input.ipv4,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.ipv6 &&
                (/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))$/i.test(
                  input.ipv6,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".ipv6",
                      expected: 'string & Format<"ipv6">',
                      value: input.ipv6,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".ipv6",
                    expected: '(string & Format<"ipv6">)',
                    value: input.ipv6,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.uri &&
                ((/\/|:/.test(input.uri) &&
                  /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
                    input.uri,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uri",
                      expected: 'string & Format<"uri">',
                      value: input.uri,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uri",
                    expected: '(string & Format<"uri">)',
                    value: input.uri,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.uriReference &&
                (/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
                  input.uriReference,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uriReference",
                      expected: 'string & Format<"uri-reference">',
                      value: input.uriReference,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uriReference",
                    expected: '(string & Format<"uri-reference">)',
                    value: input.uriReference,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.uriTemplate &&
                (/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i.test(
                  input.uriTemplate,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uriTemplate",
                      expected: 'string & Format<"uri-template">',
                      value: input.uriTemplate,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uriTemplate",
                    expected: '(string & Format<"uri-template">)',
                    value: input.uriTemplate,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.url &&
                (/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu.test(
                  input.url,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".url",
                      expected: 'string & Format<"url">',
                      value: input.url,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".url",
                    expected: '(string & Format<"url">)',
                    value: input.url,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.datetime &&
                (!isNaN(new Date(input.datetime).getTime()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".datetime",
                      expected: 'string & Format<"date-time">',
                      value: input.datetime,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".datetime",
                    expected: '(string & Format<"date-time">)',
                    value: input.datetime,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.date &&
                (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".date",
                      expected: 'string & Format<"date">',
                      value: input.date,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".date",
                    expected: '(string & Format<"date">)',
                    value: input.date,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.time &&
                (/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
                  input.time,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".time",
                      expected: 'string & Format<"time">',
                      value: input.time,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".time",
                    expected: '(string & Format<"time">)',
                    value: input.time,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.duration &&
                (/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
                  input.duration,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".duration",
                      expected: 'string & Format<"duration">',
                      value: input.duration,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".duration",
                    expected: '(string & Format<"duration">)',
                    value: input.duration,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.jsonPointer &&
                (/^(?:\/(?:[^~/]|~0|~1)*)*$/.test(input.jsonPointer) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".jsonPointer",
                      expected: 'string & Format<"json-pointer">',
                      value: input.jsonPointer,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".jsonPointer",
                    expected: '(string & Format<"json-pointer">)',
                    value: input.jsonPointer,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.relativeJsonPointer &&
                (/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/.test(
                  input.relativeJsonPointer,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".relativeJsonPointer",
                      expected: 'string & Format<"relative-json-pointer">',
                      value: input.relativeJsonPointer,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".relativeJsonPointer",
                    expected: '(string & Format<"relative-json-pointer">)',
                    value: input.relativeJsonPointer,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagFormat",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TypeTagFormat",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output, errorFactory) as any;
    },
    encode: (input: TypeTagFormat): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "byte";
          writer.uint32(10);
          writer.string(input.byte);
          // property "password";
          writer.uint32(18);
          writer.string(input.password);
          // property "regex";
          writer.uint32(26);
          writer.string(input.regex);
          // property "uuid";
          writer.uint32(34);
          writer.string(input.uuid);
          // property "email";
          writer.uint32(42);
          writer.string(input.email);
          // property "hostname";
          writer.uint32(50);
          writer.string(input.hostname);
          // property "idnEmail";
          writer.uint32(58);
          writer.string(input.idnEmail);
          // property "idnHostname";
          writer.uint32(66);
          writer.string(input.idnHostname);
          // property "iri";
          writer.uint32(74);
          writer.string(input.iri);
          // property "iriReference";
          writer.uint32(82);
          writer.string(input.iriReference);
          // property "ipv4";
          writer.uint32(90);
          writer.string(input.ipv4);
          // property "ipv6";
          writer.uint32(98);
          writer.string(input.ipv6);
          // property "uri";
          writer.uint32(106);
          writer.string(input.uri);
          // property "uriReference";
          writer.uint32(114);
          writer.string(input.uriReference);
          // property "uriTemplate";
          writer.uint32(122);
          writer.string(input.uriTemplate);
          // property "url";
          writer.uint32(130);
          writer.string(input.url);
          // property "datetime";
          writer.uint32(138);
          writer.string(input.datetime);
          // property "date";
          writer.uint32(146);
          writer.string(input.date);
          // property "time";
          writer.uint32(154);
          writer.string(input.time);
          // property "duration";
          writer.uint32(162);
          writer.string(input.duration);
          // property "jsonPointer";
          writer.uint32(170);
          writer.string(input.jsonPointer);
          // property "relativeJsonPointer";
          writer.uint32(178);
          writer.string(input.relativeJsonPointer);
        };
        //TypeTagFormat;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
