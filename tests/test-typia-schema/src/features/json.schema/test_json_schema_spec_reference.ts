import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the recursive root is dereferenced while child links still target
 * the named component.
 *
 * Native root dereference must retain the component needed by recursive nested
 * references.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert optional next and array children both retain their self-reference and
 *    required list distinctions.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the recursive root is dereferenced while child links still target the named component.
 * @evidence contracts/testing.md#independent-expectations The authored complete root fixes string, optional next and required children semantics; component-versus-root comparison has a shared-producer limitation but the fixed root anchors the result.
 * @evidence contracts/testing.md#distinguishing-cases Optional next and array children both retain their self-reference and required list distinctions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_reference through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native root dereference must retain the component needed by recursive nested references. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Optional next and array children both retain their self-reference and required list distinctions. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_reference = (): void => {
  interface INode {
    value: string;
    next?: INode;
    children: INode[];
  }

  const unit = typia.json.schema<INode>();
  TestEquality.equals("root is dereferenced", clean(unit.schema), {
    type: "object",
    properties: {
      children: {
        type: "array",
        items: {
          $ref: "#/components/schemas/INode",
        },
      },
      next: {
        $ref: "#/components/schemas/INode",
      },
      value: {
        type: "string",
      },
    },
    required: ["value", "children"],
    additionalProperties: false,
  });
  TestEquality.equals(
    "component exists",
    clean(unit.components.schemas?.INode),
    clean(unit.schema),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
