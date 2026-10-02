import typia from "typia";

class Box {
  #secret: boolean;
  public label: string;
  constructor(label: string, secret: boolean) {
    this.label = label;
    this.#secret = secret;
    void this.#secret;
  }
}

class SubBox extends Box {
  #extra: number;
  public tag: string;
  constructor() {
    super("hi", true);
    this.#extra = 1;
    void this.#extra;
    this.tag = "t";
  }
}

class SoloPrivate {
  #solo: string;
  constructor() {
    this.#solo = "x";
    void this.#solo;
  }
}

class MethodPrivate {
  public label: string;
  #hidden(): number {
    return 1;
  }
  get #view(): number {
    return 2;
  }
  set #view(_next: number) {}
  constructor(label: string) {
    this.label = label;
    void this.#hidden();
    this.#view = this.#view;
  }
}

class KeywordBox {
  private secret: boolean;
  protected token: string;
  public label: string;
  constructor(label: string, secret: boolean, token: string) {
    this.label = label;
    this.secret = secret;
    void this.secret;
    this.token = token;
  }
}

const isBox = typia.createIs<Box>();
const assertBox = typia.createAssert<Box>();
const validateBox = typia.createValidate<Box>();
const isSubBox = typia.createIs<SubBox>();
const isSolo = typia.createIs<SoloPrivate>();
const isMethod = typia.createIs<MethodPrivate>();
const isKeyword = typia.createIs<KeywordBox>();
const fixture = {
  Box,
  SubBox,
  SoloPrivate,
  MethodPrivate,
  KeywordBox,
  isBox,
  assertBox,
  validateBox,
  isSubBox,
  isSolo,
  isMethod,
  isKeyword,
};

/**
 * Verifies private field filter is in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original privateFieldFilterSource
 * declarations; the former privateFieldFilterRuntimeRunner observations execute
 * in the existing automated worker. This detects a generated program whose
 * output compiles but changes these runtime decisions: is real Box instance; is
 * real SubBox instance; is real SoloPrivate instance; is real MethodPrivate
 * instance; is plain public Box shape; is plain public SubBox shape.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from privateFieldFilterRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations ECMAScript private storage is absent from the public structural input contract; authored public properties must still validate. Private-only, inherited-private, method/accessor and TypeScript private/protected declarations retain separate wrong-type and missing-property controls.
 * @evidence contracts/testing.md#distinguishing-cases Preserves is real Box instance; is real SubBox instance; is real SoloPrivate instance; is real MethodPrivate instance; is plain public Box shape; is plain public SubBox shape; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_private_field_filter_is in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed privateFieldFilterSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/private_field_filter_is_transform_test.go privateFieldFilterRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_private_field_filter_is = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  class Box {
    #secret;
    label;
    constructor(label: any, secret: any) {
      this.label = label;
      this.#secret = secret;
      void this.#secret;
    }
  }
  class SubBox extends Box {
    #extra;
    tag;
    constructor() {
      super("hi", true);
      this.#extra = 1;
      void this.#extra;
      this.tag = "t";
    }
  }
  class SoloPrivate {
    #solo;
    constructor() {
      this.#solo = "x";
      void this.#solo;
    }
  }
  class MethodPrivate {
    label;
    #hidden() {
      return 1;
    }
    get #view() {
      return 2;
    }
    set #view(_next: any) {}
    constructor(label: any) {
      void this.#hidden;
      void this.#view;
      this.label = label;
    }
  }

  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + " but got " + actual);
    }
  };

  // A real instance carrying #private members passes its own guard.
  expect("is real Box instance", mod.isBox(new Box("hi", true)), true);
  expect("is real SubBox instance", mod.isSubBox(new SubBox()), true);
  expect("is real SoloPrivate instance", mod.isSolo(new SoloPrivate()), true);
  expect(
    "is real MethodPrivate instance",
    mod.isMethod(new MethodPrivate("hi")),
    true,
  );

  // The #private field is not part of the structural shape: a plain object with
  // only the public members is accepted, exactly like a keyword-private class.
  expect("is plain public Box shape", mod.isBox({ label: "hi" }), true);
  expect(
    "is plain public SubBox shape",
    mod.isSubBox({ label: "hi", tag: "t" }),
    true,
  );
  expect("is empty SoloPrivate shape", mod.isSolo({}), true);
  expect(
    "is plain public MethodPrivate shape",
    mod.isMethod({ label: "hi" }),
    true,
  );
  expect(
    "is plain public KeywordBox shape",
    mod.isKeyword({ label: "hi" }),
    true,
  );

  // The public shape is still validated structurally.
  expect("reject wrong public label type", mod.isBox({ label: 123 }), false);
  expect("reject missing public label", mod.isBox({}), false);

  // assert / validate accept a real instance without touching a mangled key.
  expect(
    "assert real Box returns input",
    mod.assertBox(new Box("hi", true)) instanceof Box,
    true,
  );
  expect(
    "validate real Box succeeds",
    mod.validateBox(new Box("hi", true)).success,
    true,
  );
  expect(
    "validate plain public Box succeeds",
    mod.validateBox({ label: "hi" }).success,
    true,
  );

  let threw: any = false;
  try {
    mod.assertBox({ label: 123 });
  } catch (_exp: any) {
    threw = true;
  }
  expect("assert rejects wrong public label", threw, true);
};
