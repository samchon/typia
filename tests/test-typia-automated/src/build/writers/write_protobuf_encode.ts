import { NamingConvention, dedent } from "@typia/utils";

/**
 * Renders protobuf encoding bindings for one fixture and API form.
 *
 * @evidence contracts/testing.md#behavioral-verification This writer binds the actual encode callback, companion decoder and generated message to the selected helper. The ordinary helper compares admitted protobufJS reference bytes, decoded fixture content and stable re-encoding; source rendering owns no runtime assertion.
 * @evidence contracts/testing.md#independent-expectations Fixture/RESOLVE data establish content expectations. protobufJS independently encodes the supplied native message only outside oneof/int64 exclusions; it does not prove that message reflects the TypeScript declaration. Companion decode/re-encode remains correlated.
 * @evidence contracts/testing.md#distinguishing-cases Direct/factory forms retain the same fixture, message and helper. The helper distinguishes supported independent-byte cases from oneof/int64 roundtrips; invalid-input scenarios belong to separate validating wrappers rather than ordinary encoding.
 * @evidence contracts/testing.md#execution-ownership The active protobuf encoding programmer calls this writer through the controller. Private getFile/getMethod/getFunctor own matching identities and callback spellings; generated exports execute through TestServant, not during rendering.
 */
export const write_protobuf_encode =
  (method: string) => (create: boolean) => (structure: string) =>
    dedent`
      import { ${structure} } from "@typia/template";
      import typia from "typia";

      import { _test_protobuf_${getMethod(method)(
        false,
      )} } from "../../internal/_test_protobuf_${getMethod(method)(false)}";

      /**
       * Checks native protobuf encoding for ${structure} through its existing helper.
       *
       * Ordinary encoding compares independent protobufJS bytes where the
       * emitted message has neither oneof nor int64. Every admitted fixture
       * also checks decoded content and stable re-encoding.
       *
       * 1. Generate the fixture and encode with the actual native callback.
       * 2. Compare supported independent bytes and the roundtrip assertions.
       *
       * @evidence contracts/testing.md#behavioral-verification The existing _test_protobuf_${getMethod(method)(false)} helper consumes this actual encode callback, companion decoder and message. The ordinary encode helper compares byte length/content against protobufJS unless the message contains oneof or int64, then requires resolved fixture content and byte-stable re-encoding.
       * @evidence contracts/testing.md#independent-expectations The authored fixture and optional RESOLVE define decoded data before encoding. protobufJS independently encodes the supplied native-produced message for the supported subset, but does not independently verify that message matches the TypeScript declaration. The typia decoder/re-encoder roundtrip can share producer errors.
       * @evidence contracts/testing.md#distinguishing-cases This entry preserves ${structure} and the ${getMethod(method)(create)} API form. Fixture values define its actual scalar, array, union or tagged contexts; oneof/int64 messages retain roundtrip assertions but have no protobufJS byte comparison in the ordinary helper. Validating wrappers own their separate spoiled-input checks.
       * @evidence contracts/testing.md#execution-ownership TestServant discovers this generated export in the protobuf encoding family during test-typia-automated start. The helper owns assertions; this entry binds the TypeScript declaration to real encode/decode/message transforms.
       * @evidence contracts/e2e.md#necessary-boundary Native TypeScript analysis, generated wire callbacks and the protobuf message must agree at runtime. Handwritten callbacks cannot establish that producer assembly; direct codec units cover portable algorithms separately.
       * @evidence contracts/e2e.md#shared-execution The fully generated suite uses one worker/project and the workspace content-keyed native artifact. This entry performs no installation, compiler preparation or process creation.
       * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper generates its local input and owns the encoded/decoded values for this invocation. The message is read-only; protobufJS parsing is local when used. The runner closes the suite worker in finally, and ttsc owns artifact identity.
       * @evidence contracts/e2e.md#preserved-coverage The original fixture, encode callback, companion decoder, message and helper invocation remain intact. Neither unsupported independent byte comparisons nor broader malformed-input coverage is claimed by this declaration.
       */
      export const ${getFile(method)(create)}_${structure} = (): void => _${getFile(
        method,
      )(false)}(
        "${structure}",
      )<${structure}>(${structure})({
        encode: ${getFunctor(method)(create)(structure)},
        decode: typia.protobuf.createDecode<${structure}>(),
        message: typia.protobuf.message<${structure}>(),
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
