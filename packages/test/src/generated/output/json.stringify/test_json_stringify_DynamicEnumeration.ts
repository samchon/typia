import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_stringify_DynamicEnumeration = _test_json_stringify(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  ((input: DynamicEnumeration): string => {
    const $io1 = (input: any): boolean =>
      (undefined === input.ar || "string" === typeof input.ar) &&
      (undefined === input["zh-Hans"] ||
        "string" === typeof input["zh-Hans"]) &&
      (undefined === input["zh-Hant"] ||
        "string" === typeof input["zh-Hant"]) &&
      (undefined === input.en || "string" === typeof input.en) &&
      (undefined === input.fr || "string" === typeof input.fr) &&
      (undefined === input.de || "string" === typeof input.de) &&
      (undefined === input.ja || "string" === typeof input.ja) &&
      (undefined === input.ko || "string" === typeof input.ko) &&
      (undefined === input.pt || "string" === typeof input.pt) &&
      (undefined === input.ru || "string" === typeof input.ru);
    const $string = (typia.json.stringify as any).string;
    const $tail = (typia.json.stringify as any).tail;
    const $so0 = (input: any): any => `{"value":${$so1(input.value)}}`;
    const $so1 = (input: any): any =>
      `{${$tail(
        `${
          undefined === input.ar
            ? ""
            : `"ar":${undefined !== input.ar ? $string(input.ar) : undefined},`
        }${
          undefined === input["zh-Hans"]
            ? ""
            : `"zh-Hans":${
                undefined !== input["zh-Hans"]
                  ? $string(input["zh-Hans"])
                  : undefined
              },`
        }${
          undefined === input["zh-Hant"]
            ? ""
            : `"zh-Hant":${
                undefined !== input["zh-Hant"]
                  ? $string(input["zh-Hant"])
                  : undefined
              },`
        }${
          undefined === input.en
            ? ""
            : `"en":${undefined !== input.en ? $string(input.en) : undefined},`
        }${
          undefined === input.fr
            ? ""
            : `"fr":${undefined !== input.fr ? $string(input.fr) : undefined},`
        }${
          undefined === input.de
            ? ""
            : `"de":${undefined !== input.de ? $string(input.de) : undefined},`
        }${
          undefined === input.ja
            ? ""
            : `"ja":${undefined !== input.ja ? $string(input.ja) : undefined},`
        }${
          undefined === input.ko
            ? ""
            : `"ko":${undefined !== input.ko ? $string(input.ko) : undefined},`
        }${
          undefined === input.pt
            ? ""
            : `"pt":${undefined !== input.pt ? $string(input.pt) : undefined},`
        }${
          undefined === input.ru
            ? ""
            : `"ru":${undefined !== input.ru ? $string(input.ru) : undefined}`
        }`,
      )}}`;
    return $so0(input);
  })(input),
);
