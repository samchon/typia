import { NamingConvention, dedent } from "@typia/utils";

/**
 * Renders protobuf decoding bindings for one fixture and API form.
 *
 * @evidence contracts/testing.md#behavioral-verification This writer binds an actual selected decode callback and companion native encoder to the named helper. The helper owns decoded-content and complete re-encoded-byte comparisons; the writer itself only renders source.
 * @evidence contracts/testing.md#independent-expectations Authored fixture/RESOLVE data determine decoded-content expectations. Wire input and re-encoding use a typia companion and are correlated, so byte stability does not independently certify Protocol Buffer conformance.
 * @evidence contracts/testing.md#distinguishing-cases Private getFile/getMethod/getFunctor preserve direct/factory API identities. The active ordinary decode descriptor generates clean roundtrips; validating wrappers and malformed-input assertions must be described by their own actual helpers rather than credited to this ordinary scenario.
 * @evidence contracts/testing.md#execution-ownership The configured protobuf decoding programmer invokes this writer through the controller. Its generated named export reaches _test_protobuf_decode through TestServant; no compiler, codec or independent verdict runs during rendering.
 */
export const write_protobuf_decode =
  (method: string) => (create: boolean) => (structure: string) =>
    dedent`
      import { ${structure} } from "@typia/template";
      import typia from "typia";

      import { _test_protobuf_${getMethod(method)(
        false,
      )} } from "../../internal/_test_protobuf_${getMethod(method)(false)}";

      /**
       * Checks native protobuf decoding for ${structure} through its existing helper.
       *
       * A fixture is encoded with the companion native encoder, decoded by the
       * selected callback and re-encoded. This owns content and byte stability,
       * while both codec halves remain correlated typia producers.
       *
       * 1. Encode the authored fixture and decode the resulting bytes.
       * 2. Require resolved content and byte-identical re-encoding.
       *
       * @evidence contracts/testing.md#behavioral-verification The existing _test_protobuf_${getMethod(method)(false)} helper receives this real decode callback and native encoder. The ordinary decode helper compares resolved fixture content and the complete length/content of re-encoded bytes; an exception or mismatch fails the named entry.
       * @evidence contracts/testing.md#independent-expectations Authored ${structure}.generate and optional RESOLVE establish expected decoded content. The wire input and re-encoding come from typia's companion encoder, so byte stability is a correlated roundtrip rather than independent wire-format conformance.
       * @evidence contracts/testing.md#distinguishing-cases This entry preserves ${structure} and ${getMethod(method)(create)}. The fixture supplies its admitted binary scalar, array and object shapes. The ordinary helper owns valid encoded input only; malformed bytes and validating decoder failures are not asserted here.
       * @evidence contracts/testing.md#execution-ownership TestServant discovers the generated protobuf decoding export during test-typia-automated start. The entry owns its native callback/fixture binding and the helper owns result and byte comparisons.
       * @evidence contracts/e2e.md#necessary-boundary The real Go-produced encoder and decoder must execute for the same TypeScript declaration and preserve its resolved value. Handwritten callbacks cannot establish native declaration analysis or emitted runtime assembly.
       * @evidence contracts/e2e.md#shared-execution One suite worker opens the completed generated project for every family and reuses the installed workspace/native artifact. The entry launches no host or compiler itself.
       * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper's input, encoded bytes, decoded value and re-encoded bytes are local to this invocation. No result is reused as another case's verdict; the runner owns worker closure and ttsc owns content-keyed native artifact lifecycle.
       * @evidence contracts/e2e.md#preserved-coverage Existing fixture generation, native encode/decode forms, content comparison and full byte comparison remain invoked unchanged. Comments disclose the previous roundtrip and malformed-input limits without excluding any case.
       */
      export const ${getFile(method)(create)}_${structure} = (): void => _${getFile(
        method,
      )(false)}(
        "${structure}",
      )<${structure}>(${structure})({
        decode: ${getFunctor(method)(create)(structure)},
        encode: typia.protobuf.createEncode<${structure}>(),
      });
`;

const getFile = (name: string) => (create: boolean) =>
  `test_protobuf_${getMethod(name)(create)}`;
const getMethod = (name: string) => (create: boolean) =>
  [create ? `create${NamingConvention.capitalize(name)}` : name]
    .filter((str) => !!str)
    .join(".");
const getFunctor =
  (name: string) => (create: boolean) => (structure: string) =>
    create
      ? `typia.protobuf.${getMethod(name)(create)}<${structure}>()`
      : `(input) => typia.protobuf.${name}<${structure}>(input)`;

// console.log(write_protobuf_decode("decode")(true)("ArrayAny"));
