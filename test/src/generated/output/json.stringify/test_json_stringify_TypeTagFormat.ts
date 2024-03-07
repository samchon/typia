import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
export const test_json_stringify_TypeTagFormat = _test_json_stringify(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
  ((input: TypeTagFormat): string => {
    const $string = (typia.json.stringify as any).string;
    const $so0 = (input: any): any =>
      `{"byte":${$string(input.byte)},"password":${$string(
        input.password,
      )},"regex":${$string(input.regex)},"uuid":${$string(
        input.uuid,
      )},"email":${$string(input.email)},"hostname":${$string(
        input.hostname,
      )},"idnEmail":${$string(input.idnEmail)},"idnHostname":${$string(
        input.idnHostname,
      )},"iri":${$string(input.iri)},"iriReference":${$string(
        input.iriReference,
      )},"ipv4":${$string(input.ipv4)},"ipv6":${$string(
        input.ipv6,
      )},"uri":${$string(input.uri)},"uriReference":${$string(
        input.uriReference,
      )},"uriTemplate":${$string(input.uriTemplate)},"url":${$string(
        input.url,
      )},"datetime":${$string(input.datetime)},"date":${$string(
        input.date,
      )},"time":${$string(input.time)},"duration":${$string(
        input.duration,
      )},"jsonPointer":${$string(
        input.jsonPointer,
      )},"relativeJsonPointer":${$string(input.relativeJsonPointer)}}`;
    return $so0(input);
  })(input),
);
