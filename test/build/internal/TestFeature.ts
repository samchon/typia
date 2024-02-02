import { write_notation } from "../writers/write_notation";
import { write_protobuf_decode } from "../writers/write_protobuf_decode";
import { write_protobuf_encode } from "../writers/write_protobuf_encode";
import { write_random } from "../writers/write_random";

export interface TestFeature {
  module: string | null;
  method: string;
  creatable: boolean;
  spoilable: boolean;
  formData?: boolean;
  query?: true;
  headers?: true;
  jsonable?: true;
  primitive?: true;
  resolved?: true;
  strict?: true;
  explicit?: true;
  programmer?: (create: boolean) => (structure: string) => string;
}
export namespace TestFeature {
  export const DATA: TestFeature[] = [
    //----
    // RUNTIME VALIDATORS
    //----
    // VALIDATORS
    {
      module: null,
      method: "is",
      creatable: true,
      spoilable: true,
    },
    {
      module: null,
      method: "assert",
      creatable: true,
      spoilable: true,
    },
    {
      module: null,
      method: "assertGuard",
      creatable: true,
      spoilable: true,
    },
    {
      module: null,
      method: "validate",
      creatable: true,
      spoilable: true,
    },

    // STRICT VALIDATORS
    {
      module: null,
      method: "equals",
      creatable: true,
      spoilable: false,
      strict: true,
    },
    {
      module: null,
      method: "assertEquals",
      creatable: true,
      spoilable: false,
      strict: true,
    },
    {
      module: null,
      method: "assertGuardEquals",
      creatable: true,
      spoilable: false,
      strict: true,
    },
    {
      module: null,
      method: "validateEquals",
      creatable: true,
      spoilable: false,
      strict: true,
    },

    // RANDOM
    {
      module: null,
      method: "random",
      creatable: true,
      spoilable: false,
      resolved: true,
      programmer: write_random,
    },

    //----
    // PROTOBUF FUNCTIONS
    //----
    // ENCODERS
    {
      module: "protobuf",
      method: "encode",
      creatable: true,
      spoilable: false,
      resolved: true,
      programmer: write_protobuf_encode("encode"),
    },
    {
      module: "protobuf",
      method: "isEncode",
      creatable: true,
      spoilable: true,
      resolved: true,
      programmer: write_protobuf_encode("isEncode"),
    },
    {
      module: "protobuf",
      method: "assertEncode",
      creatable: true,
      spoilable: true,
      resolved: true,
      programmer: write_protobuf_encode("assertEncode"),
    },
    {
      module: "protobuf",
      method: "validateEncode",
      creatable: true,
      spoilable: true,
      resolved: true,
      programmer: write_protobuf_encode("validateEncode"),
    },
    // DECODERS
    {
      module: "protobuf",
      method: "decode",
      creatable: true,
      spoilable: false,
      resolved: true,
      programmer: write_protobuf_decode("decode"),
    },
    {
      module: "protobuf",
      method: "isDecode",
      creatable: true,
      spoilable: true,
      resolved: true,
      programmer: write_protobuf_decode("isDecode"),
    },
    {
      module: "protobuf",
      method: "assertDecode",
      creatable: true,
      spoilable: true,
      resolved: true,
      programmer: write_protobuf_decode("assertDecode"),
    },
    {
      module: "protobuf",
      method: "validateDecode",
      creatable: true,
      spoilable: true,
      resolved: true,
      programmer: write_protobuf_decode("validateDecode"),
    },

    //----
    // JSON FUNCTIONS
    //----
    // PARSERS
    {
      module: "json",
      method: "isParse",
      creatable: true,
      spoilable: true,
      jsonable: true,
      primitive: true,
      explicit: true,
    },
    {
      module: "json",
      method: "assertParse",
      creatable: true,
      spoilable: true,
      jsonable: true,
      primitive: true,
      explicit: true,
    },
    {
      module: "json",
      method: "validateParse",
      creatable: true,
      spoilable: true,
      jsonable: true,
      explicit: true,
      primitive: true,
      resolved: true,
    },

    // STRINGIFY
    {
      module: "json",
      method: "stringify",
      creatable: true,
      spoilable: false,
      jsonable: true,
    },
    {
      module: "json",
      method: "isStringify",
      creatable: true,
      spoilable: true,
      jsonable: true,
    },
    {
      module: "json",
      method: "assertStringify",
      creatable: true,
      spoilable: true,
      jsonable: true,
    },
    {
      module: "json",
      method: "validateStringify",
      creatable: true,
      spoilable: true,
      jsonable: true,
    },

    //----
    // HTTP
    //----
    {
      module: "http",
      method: "formData",
      creatable: true,
      formData: true,
      resolved: true,
      spoilable: false,
    },
    {
      module: "http",
      method: "assertFormData",
      creatable: true,
      formData: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "isFormData",
      creatable: true,
      formData: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "validateFormData",
      creatable: true,
      formData: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "query",
      creatable: true,
      query: true,
      resolved: true,
      spoilable: false,
    },
    {
      module: "http",
      method: "assertQuery",
      creatable: true,
      query: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "isQuery",
      creatable: true,
      query: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "validateQuery",
      creatable: true,
      query: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "headers",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: false,
    },
    {
      module: "http",
      method: "assertHeaders",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "isHeaders",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: true,
    },
    {
      module: "http",
      method: "validateHeaders",
      creatable: true,
      headers: true,
      resolved: true,
      spoilable: true,
    },

    //----
    // NOTATIONS
    //----
    ...["camel", "pascal", "snake"]
      .map((method) =>
        ([null, "assert", "is", "validate"] as const).map((mode) => ({
          module: "notation",
          method,
          creatable: true,
          resolved: true as const,
          spoilable: false,
          programmer: write_notation({
            method,
            mode,
          }),
        })),
      )
      .flat(),

    //----
    // MISCELLANEOUS
    //----
    {
      module: "misc",
      method: "clone",
      creatable: true,
      spoilable: false,
      jsonable: true,
      resolved: true,
    },
    {
      module: "misc",
      method: "isClone",
      creatable: true,
      spoilable: true,
      jsonable: true,
      resolved: true,
    },
    {
      module: "misc",
      method: "assertClone",
      creatable: true,
      spoilable: true,
      jsonable: true,
      resolved: true,
    },
    {
      module: "misc",
      method: "validateClone",
      creatable: true,
      spoilable: true,
      jsonable: true,
      resolved: true,
    },
    {
      module: "misc",
      method: "prune",
      creatable: true,
      spoilable: false,
      strict: true,
      resolved: true,
    },
    {
      module: "misc",
      method: "isPrune",
      creatable: true,
      spoilable: true,
      strict: true,
      resolved: true,
    },
    {
      module: "misc",
      method: "assertPrune",
      creatable: true,
      spoilable: true,
      strict: true,
      resolved: true,
    },
    {
      module: "misc",
      method: "validatePrune",
      creatable: true,
      spoilable: true,
      strict: true,
      resolved: true,
    },
  ];
}
