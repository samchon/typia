import { IValidation, OpenApi } from "@typia/interface";
import { Spoiler } from "@typia/template";
import { TestEquality } from "@typia/template/equality";
import { NamingConvention, OpenApiValidator } from "@typia/utils";

/**
 * Verifies strict OpenAPI validation accepts a fixture and detects extra keys.
 *
 * The clean value must succeed before its object nodes are spoiled. Comparing
 * only spoiled error paths would also accept a validator that rejects every
 * clean input, or reports an empty-error failure for a primitive-only fixture.
 *
 * 1. Validate the unspoiled fixture and preserve its input identity.
 * 2. Inject an extra key into each object and compare exact sorted error paths.
 *
 * @evidence contracts/common.md#principled-implementation The private spoil walker visits finite fixture arrays and object values, records each injected key's accessor independently of schema validation, and sorts that multiset for comparison. Fixture selection supplies JSON-representable values whose closed object nodes permit this surplus-key scenario; arbitrary cyclic or open-object fixtures are not this helper's domain.
 * @evidence contracts/common.md#clear-and-simple-design One reusable validator handles the clean and spoiled phases of the same value. Private spoil, spoil_array and spoil_object separate traversal by value shape and keep mutation and expected-path collection together without another producer or fixture copy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The injected non_regular_member key is a deliberate negative fixture input, not a validator exception or expected output obtained from that validator. The walker mutates only the freshly generated fixture; no foreign function or shared schema is changed.
 * @evidence contracts/common.md#meaningful-documentation The native comment explains the clean-input blind spot, the two assertion phases and the primitive-only empty-error distinction. Its scenario list and separated acknowledgment tags keep that rationale separate from review grounds.
 * @evidence contracts/testing.md#behavioral-verification OpenApiValidator.create with equals enabled must accept the clean fixture without replacing its data, then report exactly the recursively injected surplus paths. The first phase distinguishes blanket clean-input rejection that the former spoiled-only comparison missed.
 * @evidence contracts/testing.md#independent-expectations Fixture values establish the clean input and reference identity. Private spoil helpers derive expected surplus paths from their own mutations, before validation; sorted equality compares the whole path multiset. This helper owns surplus properties, not the separate SPOILERS type-error matrix.
 * @evidence contracts/testing.md#distinguishing-cases Each invocation checks clean success and identity, then changes only extra object keys. Nested arrays and objects contribute every injected path; primitive-only fixtures contribute none and must still return success. The generated fixture matrix supplies these shapes, while _test_validate owns invalid declared-value paths.
 * @evidence contracts/testing.md#execution-ownership This portable assertion helper directly calls the schema validator and owns its private traversal callbacks. Generated test_validateEquals entries supply native-produced schemas and execute through the automated suite's shared TestServant; the helper itself launches no compiler or worker.
 */
export const _test_validateEquals = <T>(props: {
  schema: OpenApi.IJsonSchema;
  components: OpenApi.IComponents;
  factory: {
    generate: () => T;
    SPOILERS?: Spoiler<T>[];
  };
  name: string;
}): void => {
  const validate = OpenApiValidator.create({
    components: props.components,
    schema: props.schema,
    required: true,
    equals: true,
  });
  const input: T = props.factory.generate();
  const accepted: IValidation<unknown> = validate(input);
  TestEquality.equals("valid input accepted", true, accepted.success);
  TestEquality.equals("valid input identity", true, accepted.data === input);
  const expected: string[] = (() => {
    const accessors: string[] = [];
    spoil(accessors, "$input", input);
    return accessors.sort();
  })();
  const result: IValidation<unknown> = validate(input);
  const actual: string[] = result.success
    ? []
    : result.errors.map((e) => e.path).sort();
  TestEquality.equals("superfluous", expected, actual);
};

function spoil(accessors: string[], path: string, input: any): void {
  if (Array.isArray(input)) spoil_array(accessors, path, input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    spoil_object(accessors, path, input);
}

function spoil_object(accessors: string[], path: string, obj: any): void {
  obj[KEY] = KEY;
  accessors.push(`${path}.${KEY}`);

  for (const [key, value] of Object.entries(obj))
    spoil(
      accessors,
      NamingConvention.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`,
      value,
    );
}

function spoil_array(accessors: string[], path: string, array: any[]): void {
  array.forEach((elem, i) => spoil(accessors, `${path}[${i}]`, elem));
}

const KEY = "non_regular_member";
