import typia from "typia";
import { CommentTagFormat } from "../../../../structures/CommentTagFormat";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_CommentTagFormat =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "CommentTagFormat",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagFormat",
      },
    ],
    components: {
      schemas: {
        CommentTagFormat: {
          type: "object",
          properties: {
            byte: {
              type: "string",
              format: "byte",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"byte">',
                  kind: "format",
                  value: "byte",
                  validate:
                    "/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "byte",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            password: {
              type: "string",
              format: "password",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"password">',
                  kind: "format",
                  value: "password",
                  validate: "true",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "password",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            regex: {
              type: "string",
              format: "regex",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"regex">',
                  kind: "format",
                  value: "regex",
                  validate:
                    "(() => { try { new RegExp($input); return true; } catch { return false; } })()",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "regex",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            uuid: {
              type: "string",
              format: "uuid",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"uuid">',
                  kind: "format",
                  value: "uuid",
                  validate:
                    "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "uuid",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            email: {
              type: "string",
              format: "email",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"email">',
                  kind: "format",
                  value: "email",
                  validate:
                    "/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "email",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            hostname: {
              type: "string",
              format: "hostname",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"hostname">',
                  kind: "format",
                  value: "hostname",
                  validate:
                    "/^(?=.{1,253}\\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\\.?$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "hostname",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            idnEmail: {
              type: "string",
              format: "idn-email",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"idn-email">',
                  kind: "format",
                  value: "idn-email",
                  validate:
                    '/^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/i.test($input)',
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "idn-email",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            idnHostname: {
              type: "string",
              format: "idn-hostname",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"idn-hostname">',
                  kind: "format",
                  value: "idn-hostname",
                  validate:
                    "/^([a-z0-9\\u00a1-\\uffff0-9]+(-[a-z0-9\\u00a1-\\uffff0-9]+)*\\.)+[a-z\\u00a1-\\uffff]{2,}$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "idn-hostname",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            iri: {
              type: "string",
              format: "iri",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"iri">',
                  kind: "format",
                  value: "iri",
                  validate:
                    '/^[A-Za-z][\\d+-.A-Za-z]*:[^\\u0000-\\u0020"<>\\\\^`{|}]*$/u.test($input)',
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "iri",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            iriReference: {
              type: "string",
              format: "iri-reference",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"iri-reference">',
                  kind: "format",
                  value: "iri-reference",
                  validate:
                    '/^[A-Za-z][\\d+-.A-Za-z]*:[^\\u0000-\\u0020"<>\\\\^`{|}]*$/u.test($input)',
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "iri-reference",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            ipv4: {
              type: "string",
              format: "ipv4",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"ipv4">',
                  kind: "format",
                  value: "ipv4",
                  validate:
                    "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "ipv4",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            ipv6: {
              type: "string",
              format: "ipv6",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"ipv6">',
                  kind: "format",
                  value: "ipv6",
                  validate:
                    "/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "ipv6",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            uri: {
              type: "string",
              format: "uri",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"uri">',
                  kind: "format",
                  value: "uri",
                  validate:
                    "/\\/|:/.test($input) && /^(?:[a-z][a-z0-9+\\-.]*:)(?:\\/?\\/(?:(?:[a-z0-9\\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\\.[a-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|(?:[a-z0-9\\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\\/(?:(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\\?(?:[a-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "uri",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            uriReference: {
              type: "string",
              format: "uri-reference",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"uri-reference">',
                  kind: "format",
                  value: "uri-reference",
                  validate:
                    "/^(?:[a-z][a-z0-9+\\-.]*:)?(?:\\/?\\/(?:(?:[a-z0-9\\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\\.[a-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|(?:[a-z0-9\\-._~!$&'\"()*+,;=]|%[0-9a-f]{2})*)(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~!$&'\"()*+,;=:@]|%[0-9a-f]{2})*)*|\\/(?:(?:[a-z0-9\\-._~!$&'\"()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'\"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\\-._~!$&'\"()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&'\"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\\?(?:[a-z0-9\\-._~!$&'\"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\\-._~!$&'\"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "uri-reference",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            uriTemplate: {
              type: "string",
              format: "uri-template",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"uri-template">',
                  kind: "format",
                  value: "uri-template",
                  validate:
                    "/^(?:(?:[^\\x00-\\x20\"'<>%\\\\^`{|}]|%[0-9a-f]{2})|\\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\\*)?)*\\})*$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "uri-template",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            url: {
              type: "string",
              format: "url",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"url">',
                  kind: "format",
                  value: "url",
                  validate:
                    "/^(?:https?|ftp):\\/\\/(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u{00a1}-\\u{ffff}]+-)*[a-z0-9\\u{00a1}-\\u{ffff}]+)(?:\\.(?:[a-z0-9\\u{00a1}-\\u{ffff}]+-)*[a-z0-9\\u{00a1}-\\u{ffff}]+)*(?:\\.(?:[a-z\\u{00a1}-\\u{ffff}]{2,})))(?::\\d{2,5})?(?:\\/[^\\s]*)?$/iu.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "url",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            datetime: {
              type: "string",
              format: "date-time",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"date-time">',
                  kind: "format",
                  value: "date-time",
                  validate: "!isNaN(new Date($input).getTime())",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "date-time",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            date: {
              type: "string",
              format: "date",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"date">',
                  kind: "format",
                  value: "date",
                  validate: "/^(\\d{4})-(\\d{2})-(\\d{2})$/.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "date",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            time: {
              type: "string",
              format: "time",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"time">',
                  kind: "format",
                  value: "time",
                  validate:
                    "/^(\\d\\d):(\\d\\d):(\\d\\d(?:\\.\\d+)?)(z|([+-])(\\d\\d)(?::?(\\d\\d))?)?$/i.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "time",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            duration: {
              type: "string",
              format: "duration",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"duration">',
                  kind: "format",
                  value: "duration",
                  validate:
                    "/^P(?!$)((\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?|(\\d+W)?)$/.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "duration",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            jsonPointer: {
              type: "string",
              format: "json-pointer",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"json-pointer">',
                  kind: "format",
                  value: "json-pointer",
                  validate: "/^(?:\\/(?:[^~/]|~0|~1)*)*$/.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "json-pointer",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
            relativeJsonPointer: {
              type: "string",
              format: "relative-json-pointer",
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: 'Format<"relative-json-pointer">',
                  kind: "format",
                  value: "relative-json-pointer",
                  validate:
                    "/^(?:0|[1-9][0-9]*)(?:#|(?:\\/(?:[^~/]|~0|~1)*)*)$/.test($input)",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              "x-typia-jsDocTags": [
                {
                  name: "format",
                  text: [
                    {
                      text: "relative-json-pointer",
                      kind: "text",
                    },
                  ],
                },
              ],
            },
          },
          nullable: false,
          required: [
            "byte",
            "password",
            "regex",
            "uuid",
            "email",
            "hostname",
            "idnEmail",
            "idnHostname",
            "iri",
            "iriReference",
            "ipv4",
            "ipv6",
            "uri",
            "uriReference",
            "uriTemplate",
            "url",
            "datetime",
            "date",
            "time",
            "duration",
            "jsonPointer",
            "relativeJsonPointer",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
