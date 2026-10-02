import typia from "typia";

namespace NS {
  // from: private ctor + static factory, declared inside a namespace
  export class Point {
    private constructor(
      public readonly x: number,
      public readonly y: number,
    ) {}
    static from(seed: { x: number; y: number }): NS.Point {
      return new NS.Point(seed.x, seed.y);
    }
    sum(): number {
      return this.x + this.y;
    }
  }

  // new: single-arg ctor inside a namespace
  export class Box {
    value!: number;
    constructor(seed: { value: number }) {
      this.value = seed.value;
    }
    doubled(): number {
      return this.value * 2;
    }
  }

  // doubly-nested namespace -> NS.Inner.Deep
  export namespace Inner {
    export class Deep {
      tag!: string;
      constructor(seed: { tag: string }) {
        this.tag = seed.tag;
      }
      shout(): string {
        return this.tag + "!";
      }
    }
  }

  // instance form inside a namespace -> field-copy onto NS.Plain.prototype
  export class Plain {
    id!: number;
    greet(): string {
      return "hi " + this.id;
    }
  }
}

// generic class -> field-copy must reference the bare Container constructor
class Container<T> {
  value!: T;
  label!: string;
  describe(): string {
    return this.label;
  }
}

// unnamed class expression -> reconstructed via the const binding Animal
const Animal = class {
  name!: string;
  constructor(seed?: { name: string }) {
    if (seed) this.name = seed.name;
  }
  speak(): string {
    return this.name;
  }
};
type Animal = InstanceType<typeof Animal>;

// named class expression -> outer binding Plant (inner name Beast binds only
// inside the class body)
const Plant = class Beast {
  species!: string;
  grow(): string {
    return this.species + "!";
  }
};
type Plant = InstanceType<typeof Plant>;

const fromPoint = typia.plain.createClassify<typeof NS.Point>();
const newBox = typia.plain.createClassify<typeof NS.Box>();
const newDeep = typia.plain.createClassify<typeof NS.Inner.Deep>();
const fieldPlain = typia.plain.createClassify<NS.Plain>();
const fieldContainer = typia.plain.createClassify<Container<string>>();
const newAnimal = typia.plain.createClassify<typeof Animal>();
const fieldPlant = typia.plain.createClassify<Plant>();

/**
 * Verifies namespace, generic and class-expression classify callbacks preserve
 * runtime class identity.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification namespace, generic and class-expression classify callbacks preserve runtime class identity; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Namespaced from/new/field-copy, doubly nested namespace, generic instance, anonymous bound class and named class expression retain their distinct constructor references and methods.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_class_ref in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_class_ref_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_class_ref = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // namespaced from
  const p = fromPoint({ x: 1, y: 2 });
  assert(
    p instanceof NS.Point,
    "namespaced from should yield an NS.Point instance",
  );
  assert(
    p.sum() === 3,
    "NS.Point.from seed should reconstruct, got: " + p.sum(),
  );

  // namespaced new
  const b = newBox({ value: 5 });
  assert(b instanceof NS.Box, "namespaced new should yield an NS.Box instance");
  assert(
    b.doubled() === 10,
    "new NS.Box(seed) should reconstruct, got: " + b.doubled(),
  );

  // doubly-nested namespace
  const d = newDeep({ tag: "x" });
  assert(
    d instanceof NS.Inner.Deep,
    "doubly-nested namespace should yield an NS.Inner.Deep instance",
  );
  assert(
    d.shout() === "x!",
    "new NS.Inner.Deep(seed) should reconstruct, got: " + d.shout(),
  );

  // namespaced field-copy
  const pl = fieldPlain({ id: 7 });
  assert(
    pl instanceof NS.Plain,
    "namespaced instance form should field-copy to NS.Plain",
  );
  assert(
    pl.greet() === "hi 7",
    "NS.Plain prototype method should work, got: " + pl.greet(),
  );

  // generic field-copy
  const c = fieldContainer({ value: "x", label: "L" });
  assert(
    c instanceof Container,
    "generic instance form should field-copy to Container",
  );
  assert(
    c.describe() === "L",
    "Container prototype method should work, got: " + c.describe(),
  );
  assert(
    c.value === "x" && c.label === "L",
    "Container fields should be copied",
  );

  // unnamed class expression construct
  const an: Animal = newAnimal({ name: "z" });
  assert(
    an instanceof Animal,
    "unnamed class-expression construct should yield an Animal instance",
  );
  assert(
    an.speak() === "z",
    "Animal prototype method should work, got: " + an.speak(),
  );

  // named class expression field-copy
  const plant = fieldPlant({ species: "oak" });
  assert(
    plant instanceof Plant,
    "named class-expression field-copy should yield a Plant instance",
  );
  assert(
    plant.grow() === "oak!",
    "Plant prototype method should work, got: " + plant.grow(),
  );
};
