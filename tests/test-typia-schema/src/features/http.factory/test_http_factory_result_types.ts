import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies every HTTP factory decodes the same resolved data as its direct
 * form.
 *
 * A class declaration supplies decoder metadata, but the result is its data
 * projection. Pairwise agreement alone could preserve two equally wrong
 * decoders, so each output is also compared with handwritten x:1 or 1 values.
 * Compile-only return identities and absent-method controls now have their own
 * test-interface unit; this case owns evaluated native decoder behavior.
 *
 * 1. Preserve all ten original direct/factory comparisons for x=1 or atomic 1.
 * 2. Add the three validation forms with an independent success/data object.
 * 3. Require malformed x values to fail at $input.x in every validation twin.
 *
 * @evidence contracts/testing.md#behavioral-verification All thirteen HTTP direct/factory pairs execute their actual emitted decoders. Every original pair comparison remains and both outputs also match the independently authored data value. The three validation pairs additionally reject invalid scalar text and report $input.x.
 * @evidence contracts/testing.md#independent-expectations The authored Query.x:number and literal string input 1 establish {x:1}; the atomic number input establishes 1. Validation success objects and negative error paths are authored, not computed with another producer, so correlated pairwise errors cannot satisfy the literal controls.
 * @evidence contracts/testing.md#distinguishing-cases Query/FormData/headers each retain ordinary/assert/is and now validate direct/factory forms; atomic parameter retains its original pair. All original inputs/calls remain, with adjacent malformed scalar controls for all three validation pairs. The fourteen type identities and four method rejections survive in test_http_factory_result_contract.ts.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_http_factory_result_types in test-typia-schema start. Actual typia.http call expressions are transformed and emitted decoders execute in the existing suite process. The separate test-interface noEmit population owns the transferred compiler-only expectations.
 * @evidence contracts/e2e.md#necessary-boundary The public factory call must resolve class metadata and emit a decoder with the same runtime data/error contract as the direct call. Type-level ReturnType tests cannot detect wrong generated conversion, missing validation or broken factory assembly.
 * @evidence contracts/e2e.md#shared-execution Every source/type/form is prepared in the existing ttsx schema project and process with its shared content-keyed plugin artifact. Local input helpers construct FormData without any per-form fixture install, compiler process or host session.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each FormData object and decoded result is invocation-local; query/header inputs are read without modification. No consumer invokes the class method or modifies retained fixtures, prototypes or plugin cache. ttsc owns artifact invalidation and the suite owns process termination.
 * @evidence contracts/e2e.md#preserved-coverage Ten original runtime pair comparisons and their producer calls remain unchanged in meaning. All fourteen compile-only identity assertions and four negative method controls are preserved under the test-interface owner. Literal expectations and three positive/negative validation pairs add previously unobserved distinctions; no original scenario is deleted as redundant.
 */
export const test_http_factory_result_types = (): void => {
  const compare = (
    title: string,
    actual: unknown,
    direct: unknown,
    oracle: unknown = { x: 1 },
  ): void => {
    TestEquality.equals(title, actual, direct);
    TestEquality.equals(`${title} factory literal`, actual, oracle);
    TestEquality.equals(`${title} direct literal`, direct, oracle);
  };
  const form = (value: string = "1"): FormData => {
    const output: FormData = new FormData();
    output.append("x", value);
    return output;
  };
  compare(
    "query",
    typia.http.createQuery<Query>()("x=1"),
    typia.http.query<Query>("x=1"),
  );
  compare(
    "assertQuery",
    typia.http.createAssertQuery<Query>()("x=1"),
    typia.http.assertQuery<Query>("x=1"),
  );
  compare(
    "isQuery",
    typia.http.createIsQuery<Query>()("x=1"),
    typia.http.isQuery<Query>("x=1"),
  );
  compare(
    "formData",
    typia.http.createFormData<Query>()(form()),
    typia.http.formData<Query>(form()),
  );
  compare(
    "assertFormData",
    typia.http.createAssertFormData<Query>()(form()),
    typia.http.assertFormData<Query>(form()),
  );
  compare(
    "isFormData",
    typia.http.createIsFormData<Query>()(form()),
    typia.http.isFormData<Query>(form()),
  );
  compare(
    "headers",
    typia.http.createHeaders<Query>()({ x: "1" }),
    typia.http.headers<Query>({ x: "1" }),
  );
  compare(
    "assertHeaders",
    typia.http.createAssertHeaders<Query>()({ x: "1" }),
    typia.http.assertHeaders<Query>({ x: "1" }),
  );
  compare(
    "isHeaders",
    typia.http.createIsHeaders<Query>()({ x: "1" }),
    typia.http.isHeaders<Query>({ x: "1" }),
  );
  compare(
    "parameter",
    typia.http.createParameter<number>()("1"),
    typia.http.parameter<number>("1"),
    1,
  );
  const validators = [
    [
      "validateQuery",
      (value: string) => typia.http.validateQuery<Query>(`x=${value}`),
      (value: string) => typia.http.createValidateQuery<Query>()(`x=${value}`),
    ],
    [
      "validateFormData",
      (value: string) => typia.http.validateFormData<Query>(form(value)),
      (value: string) =>
        typia.http.createValidateFormData<Query>()(form(value)),
    ],
    [
      "validateHeaders",
      (value: string) => typia.http.validateHeaders<Query>({ x: value }),
      (value: string) =>
        typia.http.createValidateHeaders<Query>()({ x: value }),
    ],
  ] as const;
  for (const [name, direct, factory] of validators) {
    compare(name, factory("1"), direct("1"), { success: true, data: { x: 1 } });
    for (const [kind, validate] of [
      ["direct", direct],
      ["factory", factory],
    ] as const) {
      const rejected = validate("invalid");
      TestEquality.equals(
        `${name} ${kind} invalid scalar`,
        rejected.success,
        false,
      );
      TestEquality.equals(
        `${name} ${kind} invalid path`,
        rejected.success ? [] : rejected.errors.map((error) => error.path),
        ["$input.x"],
      );
    }
  }
};

class Query {
  public x!: number;
  public twice(): number {
    return this.x * 2;
  }
}
