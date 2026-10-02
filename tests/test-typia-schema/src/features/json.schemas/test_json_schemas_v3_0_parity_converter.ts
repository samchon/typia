import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies the native "3.0" writer agrees with `@typia/utils`' downgrader.
 *
 * Two owners implement one OpenAPI 3.0 downgrade contract: the Go emitter that
 * `typia.json.*` calls, and `OpenApiConverter` in `@typia/utils`, which the
 * TypeScript implementation of this programmer called directly before the Go
 * port replaced it. The Go transform cannot call into TypeScript, so the pair
 * cannot be collapsed into one owner — this test is what keeps them aligned,
 * and it fails whichever of the two drifts.
 *
 * The fixture spans nullable references, recursion, literals, Boolean defaults,
 * tuples, records, tagged unions and annotations. Agreement between these two
 * related producers cannot prove their shared dialect assumptions correct; the
 * dialect and exclusive-bound siblings also use handwritten expectations.
 *
 * 1. Emit the same types under "3.1" and under "3.0".
 * 2. Downgrade the "3.1" collection with `@typia/utils`' converter.
 * 3. Assert the native "3.0" output equals the converter's downgrade.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that native 3.0 roots/components agree with the TypeScript converter applied to the same native 3.1 graph.
 * @evidence contracts/testing.md#independent-expectations The public OpenApiConverter is the independently executed reference owner, but its implementation lineage and the generated 3.1 input can share mistakes with the Go port. Handwritten dialect/exclusive-bound/Boolean siblings anchor those semantics separately; parity only proves agreement.
 * @evidence contracts/testing.md#distinguishing-cases Nullable references/atomic/arrays/recursion, literals/mixed literals, Boolean defaults, ordinary/rest tuples, records, tagged/nullable unions, annotations and unknown retain both full-graph comparisons.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schemas_v3_0_parity_converter in test-typia-schema start. Actual typia.json calls and any complementary generated validator are rewritten in the suite project; the emitted results are evaluated and consumed in the existing process.
 * @evidence contracts/e2e.md#necessary-boundary Generated native dialect output must interoperate with the public TypeScript conversion owner rather than only compare internal writer structures. Direct converter/writer unit calls cannot establish actual TypeScript call/signature resolution and evaluated public schema assembly together.
 * @evidence contracts/e2e.md#shared-execution All declared variants join the existing ttsx schema-suite project and process. Siblings reuse the content-keyed native plugin artifact; the case adds no independent compiler launch or install per type/dialect.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated collections/applications and conversion projections are invocation-local; declarations remain immutable. ttsc owns content-keyed artifact invalidation and the suite owns process termination. No cold-cache or installation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Nullable references/atomic/arrays/recursion, literals/mixed literals, Boolean defaults, ordinary/rest tuples, records, tagged/nullable unions, annotations and unknown retain both full-graph comparisons. Every original producer call, conversion and assertion remains enrolled under the same exported name; no meaningfully different dialect or graph consumer was deleted.
 */
export const test_json_schemas_v3_0_parity_converter = (): void => {
  interface IParityChild {
    code: string & tags.MinLength<2> & tags.Pattern<"^[a-z]+$">;
    count: number & tags.Minimum<1> & tags.Maximum<9> & tags.Default<7>;
  }
  interface ICircle {
    kind: "circle";
    radius: number;
  }
  interface ISquare {
    kind: "square";
    side: number;
  }
  interface IParityRoot {
    /** A nullable reference forces an `X.Nullable` companion schema. */
    child: IParityChild | null;
    plain: IParityChild;
    recursive: IParityRoot | null;
    nullableAtomic: string | null;
    nullableArray: (string & tags.Format<"uuid">)[] | null;
    literal: "alpha" | "beta";
    mixedLiteral: 1 | 2 | "three";
    booleanValue: boolean;
    /**
     * A boolean keyword must survive the downgrade in both owners. Rebuilding a
     * boolean as a bare `{ type: "boolean" }` dropped it and drifted the two
     * owners apart wherever a boolean carried one.
     */
    booleanDefault: boolean & tags.Default<true>;
    tuple: [string, number];
    restTuple: [string, ...number[]];
    dictionary: Record<string, number>;
    /** A tagged union keeps its discriminator through the downgrade. */
    shape: ICircle | ISquare;
    /** A nullable tagged union must drop the discriminator. */
    nullableShape: ICircle | ISquare | null;
    /** @deprecated */
    annotated: string & tags.MaxLength<4>;
    unknownValue: unknown;
  }

  const emended = typia.json.schemas<[IParityRoot, IParityChild], "3.1">();
  const actual = typia.json.schemas<[IParityRoot, IParityChild], "3.0">();

  const components: OpenApi.IComponents =
    emended.components as OpenApi.IComponents;
  const downgraded = OpenApiConverter.downgradeComponents(components, "3.0");
  const expectedSchemas = emended.schemas.map((schema) =>
    OpenApiConverter.downgradeSchema({
      version: "3.0",
      components,
      schema: schema as OpenApi.IJsonSchema,
      downgraded,
    }),
  );

  TestEquality.equals("version", actual.version, "3.0");
  TestEquality.equals(
    "downgraded components",
    clean(actual.components),
    clean(downgraded),
  );
  TestEquality.equals(
    "downgraded schemas",
    clean(actual.schemas),
    clean(expectedSchemas),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
