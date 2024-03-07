import typia, { tags } from "typia";
export const test_pr_938_string_format = () => {
  const validators = {
    regex: (input: any): input is string & tags.Format<"regex"> => {
      return (
        "string" === typeof input &&
        (() => {
          try {
            new RegExp(input);
            return true;
          } catch {
            return false;
          }
        })()
      );
    },
    uri: (input: any): input is string & tags.Format<"uri"> => {
      return (
        "string" === typeof input &&
        /\/|:/.test(input) &&
        /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
          input,
        )
      );
    },
    "uri-template": (
      input: any,
    ): input is string & tags.Format<"uri-template"> => {
      return (
        "string" === typeof input &&
        /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i.test(
          input,
        )
      );
    },
    hostname: (input: any): input is string & tags.Format<"hostname"> => {
      return (
        "string" === typeof input &&
        /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i.test(
          input,
        )
      );
    },
    url: (input: any): input is string & tags.Format<"url"> => {
      return (
        "string" === typeof input &&
        /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu.test(
          input,
        )
      );
    },
    date: (input: any): input is string & tags.Format<"date"> => {
      return (
        "string" === typeof input && /^(\d{4})-(\d{2})-(\d{2})$/.test(input)
      );
    },
    uuid: (input: any): input is string & tags.Format<"uuid"> => {
      return (
        "string" === typeof input &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input,
        )
      );
    },
    "json-pointer": (
      input: any,
    ): input is string & tags.Format<"json-pointer"> => {
      return (
        "string" === typeof input && /^(?:\/(?:[^~/]|~0|~1)*)*$/.test(input)
      );
    },
    "relative-json-pointer": (
      input: any,
    ): input is string & tags.Format<"relative-json-pointer"> => {
      return (
        "string" === typeof input &&
        /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/.test(input)
      );
    },
    byte: (input: any): input is string & tags.Format<"byte"> => {
      return (
        "string" === typeof input &&
        /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm.test(
          input,
        )
      );
    },
    password: (input: any): input is string & tags.Format<"password"> => {
      return "string" === typeof input && true;
    },
  };
  const errors: {
    format: string;
    data: string;
    description: string;
    expected: boolean;
  }[] = [];
  for (const [key, is] of Object.entries(validators)) {
    const tests = CASE_OF_AJV_FORMATS.find(
      (t) => t.schema.format === key,
    )!.tests;
    for (const t of tests)
      if (typeof t.data !== "string") continue;
      else if (is(t.data) !== t.valid)
        errors.push({
          format: key,
          data: String(t.data),
          description: t.description,
          expected: t.valid,
        });
  }
  if (errors.length) {
    console.log("ERRORS", errors);
    throw new Error("ERRORS");
  }
};
// https://github.com/ajv-validator/ajv-formats/blob/master/tests/extras/format.json
const CASE_OF_AJV_FORMATS = [
  {
    description: "format: regex",
    schema: {
      format: "regex",
    },
    tests: [
      {
        description: "valid regex",
        data: "[0-9]",
        valid: true,
      },
      {
        description: "invalid regex",
        data: "[9-0]",
        valid: false,
      },
      {
        description: "not string is valid",
        data: 123,
        valid: true,
      },
    ],
  },
  {
    description: "format: uri",
    schema: {
      format: "uri",
    },
    tests: [
      {
        description: "valid uri",
        data: "urn:isbn:978-3-531-18621-4",
        valid: true,
      },
      {
        description: "invalid relative uri-reference",
        data: "/abc",
        valid: false,
      },
    ],
  },
  {
    description: "format: uri-template",
    schema: {
      format: "uri-template",
    },
    tests: [
      {
        description: "valid uri-template",
        data: "http://example.com/dictionary/{term:1}/{term}",
        valid: true,
      },
      {
        description: "invalid uri-template",
        data: "http://example.com/dictionary/{term:1}/{term",
        valid: false,
      },
    ],
  },
  {
    description: "format: hostname",
    schema: {
      format: "hostname",
    },
    tests: [
      {
        description: "valid hostname",
        data: "123.example.com",
        valid: true,
      },
      {
        description: "valid hostname - trailing dot",
        data: "123.example.com.",
        valid: true,
      },
      {
        description: "valid hostname - single label",
        data: "localhost",
        valid: true,
      },
      {
        description: "valid hostname - single label with trailing dot",
        data: "localhost.",
        valid: true,
      },
      {
        description: "valid hostname #312",
        data: "lead-routing-qa.lvuucj.0001.use1.cache.amazonaws.com",
        valid: true,
      },
      {
        description: "valid hostname - maximum length label (63 chars)",
        data: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijk.example.com",
        valid: true,
      },
      {
        description: "invalid hostname - label too long (64 chars)",
        data: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl.example.com",
        valid: false,
      },
      {
        description: "valid hostname - maximum length hostname (255 octets)",
        data: "abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxy.example.com",
        valid: true,
      },
      {
        description:
          "valid hostname - maximum length hostname (255 octets) with trailing dot",
        data: "abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxy.example.com.",
        valid: true,
      },
      {
        description: "invalid hostname - hostname too long (256 octets)",
        data: "abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.example.com",
        valid: false,
      },
      {
        description:
          "invalid hostname - hostname too long (256 octets) with trailing dot",
        data: "abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.example.com.",
        valid: false,
      },
    ],
  },
  {
    description: "validation of URL strings",
    schema: { format: "url" },
    tests: [
      {
        data: "http://foo.com/blah_blah",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.com/blah_blah/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.com/blah_blah_(wikipedia)",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.com/blah_blah_(wikipedia)_(again)",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://www.example.com/wpstyle/?p=364",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "https://www.example.com/foo/?bar=baz&inga=42&quux",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://✪df.ws/123",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid:password@example.com:8080",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid:password@example.com:8080/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid@example.com",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid@example.com/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid@example.com:8080",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid@example.com:8080/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid:password@example.com",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://userid:password@example.com/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://142.42.1.1/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://142.42.1.1:8080/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://➡.ws/䨹",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://⌘.ws",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://⌘.ws/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.com/blah_(wikipedia)#cite-1",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.com/blah_(wikipedia)_blah#cite-1",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.com/unicode_(✪)_in_parens",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.com/(something)?after=parens",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://☺.damowmow.com/",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://code.google.com/events/#&product=browser",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://j.mp",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "ftp://foo.bar/baz",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://foo.bar/?q=Test%20URL-encoded%20stuff",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://مثال.إختبار",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://例子.测试",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://उदाहरण.परीक्षा",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://1337.net",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://a.b-c.de",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://223.255.255.254",
        description: "a valid URL string",
        valid: true,
      },
      {
        data: "http://",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://.",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://..",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://../",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://?",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://??",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://??/",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://#",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://##",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://##/",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://foo.bar?q=Spaces should be encoded",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "//",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "//a",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "///a",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "///",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http:///a",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "foo.com",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "rdar://1234",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "h://test",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http:// shouldfail.com",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: ":// should fail",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://foo.bar/foo(bar)baz quux",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "ftps://foo.bar/",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://-error-.invalid/",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://a.b--c.de/",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://-a.b.co",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://a.b-.co",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://0.0.0.0",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://10.1.1.0",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://10.1.1.255",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://224.1.1.1",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://1.1.1.1.1",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://123.123.123",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://3628126748",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://.www.foo.bar/",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://www.foo.bar./",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://.www.foo.bar./",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://10.1.1.1",
        description: "an invalid URL string",
        valid: false,
      },
      {
        data: "http://10.1.1.254",
        description: "an invalid URL string",
        valid: false,
      },
    ],
  },
  {
    description: "validation of date strings",
    schema: { format: "date" },
    tests: [
      {
        description: "a valid date string",
        data: "1963-06-19",
        valid: true,
      },
      {
        description: "an invalid date string",
        data: "06/19/1963",
        valid: false,
      },
      {
        description: "only RFC3339 not all of ISO 8601 are valid",
        data: "2013-350",
        valid: false,
      },
    ],
  },
  {
    description: "validation of iso-time strings",
    schema: { format: "iso-time" },
    tests: [
      {
        description: "a valid iso-time",
        data: "12:34:56",
        valid: true,
      },
      {
        description: "a valid iso-time with milliseconds",
        data: "12:34:56.789",
        valid: true,
      },
      {
        description: "a valid iso-time with timezone",
        data: "12:34:56+01:00",
        valid: true,
      },
      {
        description: "an invalid iso-time format",
        data: "12.34.56",
        valid: false,
      },
      {
        description: "an invalid iso-time",
        data: "12:34:67",
        valid: false,
      },
      {
        description: "a valid iso-time (leap second)",
        data: "23:59:60",
        valid: true,
      },
    ],
  },
  {
    description: "validation of date-time strings",
    schema: { format: "iso-date-time" },
    tests: [
      {
        description: "a valid iso-date-time string",
        data: "1963-06-19T12:13:14Z",
        valid: true,
      },
      {
        description: "a valid iso-date-time string without timezone",
        data: "1963-06-19T12:13:14",
        valid: true,
      },
      {
        description: "an invalid iso-date-time string (no time)",
        data: "1963-06-19",
        valid: false,
      },
      {
        description: "an invalid date-time string (additional part)",
        data: "1963-06-19T12:13:14ZTinvalid",
        valid: false,
      },
      {
        description: "an invalid iso-date-time string (invalid date)",
        data: "1963-20-19T12:13:14Z",
        valid: false,
      },
      {
        description: "an invalid iso-date-time string (invalid time)",
        data: "1963-06-19T12:13:67Z",
        valid: false,
      },
      {
        description: "a valid iso-date-time string (leap second)",
        data: "2016-12-31T23:59:60Z",
        valid: true,
      },
    ],
  },
  {
    description: "validation of uuid strings",
    schema: { format: "uuid" },
    tests: [
      {
        description: "a valid uuid",
        data: "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
        valid: true,
      },
      {
        description: "a valid uuid with uri prefix",
        data: "urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
        valid: true,
      },
      {
        description: "not valid uuid",
        data: "f81d4fae7dec11d0a76500a0c91e6bf6",
        valid: false,
      },
    ],
  },
  {
    description: "validation of JSON-pointer strings",
    schema: { format: "json-pointer" },
    tests: [
      {
        description: "a valid JSON-pointer",
        data: "/foo/bar~0/baz~1/%a",
        valid: true,
      },
      {
        description: "empty string is valid",
        data: "",
        valid: true,
      },
      {
        description: "/ is valid",
        data: "/",
        valid: true,
      },
      {
        description: "not a valid JSON-pointer (~ not escaped)",
        data: "/foo/bar~",
        valid: false,
      },
      {
        description: "valid JSON-pointer with empty segment",
        data: "/foo//bar",
        valid: true,
      },
      {
        description: "valid JSON-pointer with the last empty segment",
        data: "/foo/bar/",
        valid: true,
      },
    ],
  },
  {
    description: "validation of JSON-pointer URI fragment strings",
    schema: { format: "json-pointer-uri-fragment" },
    tests: [
      {
        description: "a valid JSON-pointer as uri fragment",
        data: "#/foo/%25a",
        valid: true,
      },
      {
        description:
          "not a valid JSON-pointer as uri fragment (% not URL-encoded)",
        data: "#/foo/%a",
        valid: false,
      },
      {
        description: "valid JSON-pointer with empty segment as uri fragment",
        data: "#/foo//bar",
        valid: true,
      },
      {
        description:
          "valid JSON-pointer with the last empty segment as uri fragment",
        data: "#/foo/bar/",
        valid: true,
      },
    ],
  },
  {
    description: "validation of relative JSON-pointer strings",
    schema: { format: "relative-json-pointer" },
    tests: [
      {
        description: "a valid relative JSON-pointer",
        data: "1/foo/bar~0/baz~1/%a",
        valid: true,
      },
      {
        description: "a valid relative JSON-pointer with #",
        data: "2#",
        valid: true,
      },
      {
        description: "parent reference is valid",
        data: "1",
        valid: true,
      },
      {
        description: "empty string is invalid",
        data: "",
        valid: false,
      },
      {
        description: "not a valid relative JSON-pointer (~ not escaped)",
        data: "1/foo/bar~",
        valid: false,
      },
      {
        description: "not a valid relative JSON-pointer (leading 0)",
        data: "01/foo",
        valid: false,
      },
      {
        description: "not a valid relative JSON-pointer with # (leading 0)",
        data: "02#",
        valid: false,
      },
      {
        description: "valid relative JSON-pointer with empty segment",
        data: "1/foo//bar",
        valid: true,
      },
      {
        description: "valid relative JSON-pointer with the last empty segment",
        data: "1/foo/bar/",
        valid: true,
      },
    ],
  },
  {
    description: "validation of Byte",
    schema: { format: "byte" },
    tests: [
      {
        description: "'hello world' encoded in base64",
        data: "aGVsbG8gd29ybGQ=",
        valid: true,
      },
      {
        description: "multiline base64",
        data: "VGhpcyBpcyBhIGJhc2U2NCBtdWx0aWxpbmUgc3RyaW5nIHRoYXQgc3BhbnMgbW9yZSB0aGFuIDc2\nIGNoYXJhY3RlcnMgdG8gdGVzdCBtdWx0aWxpbmUgY2FwYWJpbGl0aWVzCg==",
        valid: true,
      },
      {
        description: "second round multiline base64",
        data: "VGhpcyBpcyBhIGJhc2U2NCBtdWx0aWxpbmUgc3RyaW5nIHRoYXQgc3BhbnMgbW9yZSB0aGFuIDc2\nIGNoYXJhY3RlcnMgdG8gdGVzdCBtdWx0aWxpbmUgY2FwYWJpbGl0aWVzCg==",
        valid: true,
      },
      {
        description: "Invalid base64",
        data: "aGVsbG8gd29ybG=",
        valid: false,
      },
    ],
  },
  {
    description: "validation of int32",
    schema: { type: "number", format: "int32" },
    tests: [
      {
        description: "256 is ok",
        data: 256,
        valid: true,
      },
      {
        description: "256.1 fails",
        data: 256.1,
        valid: false,
      },
      {
        description: "-(2**31) is ok",
        data: -2147483648,
        valid: true,
      },
      {
        description: "-(2**31) - 1 fails",
        data: -2147483649,
        valid: false,
      },
      {
        description: "(2**31)-1 is ok",
        data: 2147483647,
        valid: true,
      },
      {
        description: "2**31 fails",
        data: 2147483648,
        valid: false,
      },
      {
        description: "non-numeric fails",
        data: "x",
        valid: false,
      },
    ],
  },
  {
    description: "validation of int64",
    schema: { type: "number", format: "int64" },
    tests: [
      {
        description: "256 is ok",
        data: 256,
        valid: true,
      },
      {
        description: "float fails",
        data: 256.1,
        valid: false,
      },
      {
        description: "non-numeric fails",
        data: "x",
        valid: false,
      },
    ],
  },
  {
    description: "validation of float",
    schema: { type: "number", format: "float" },
    tests: [
      {
        description: "256.1 is ok",
        data: 256.1,
        valid: true,
      },
      {
        description: "non-numeric fails",
        data: "x",
        valid: false,
      },
    ],
  },
  {
    description: "validation of double",
    schema: { type: "number", format: "double" },
    tests: [
      {
        description: "256.1 is ok",
        data: 256.1,
        valid: true,
      },
      {
        description: "non-numeric fails",
        data: "x",
        valid: false,
      },
    ],
  },
  {
    description: "validation of password",
    schema: { format: "password" },
    tests: [
      {
        description: "'password string' is ok",
        data: "password string",
        valid: true,
      },
    ],
  },
  {
    description: "validation of binary",
    schema: { format: "binary" },
    tests: [
      {
        description: "'binary string' is ok",
        data: "binary string",
        valid: true,
      },
    ],
  },
];
