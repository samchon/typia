import typia from "typia";

class User {
  id!: number;
  name!: string;
  greet(): string {
    return "hi " + this.name;
  }
}

class Team {
  lead!: User;
  members!: User[];
}

class Node {
  value!: number;
  next?: Node;
}

const classifyTeam = typia.plain.createClassify<Team>();
const classifyNode = typia.plain.createClassify<Node>();
const assertClassifyUser = typia.plain.createAssertClassify<User>();
const validateClassifyUser = typia.plain.createValidateClassify<User>();

/**
 * Verifies field-copy classify restores prototypes and recursive graph
 * identity.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification field-copy classify restores prototypes and recursive graph identity; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Nested Team/User arrays, finite Node chains and a true self-cycle retain prototypes, methods, leaf values and back-reference identity; assert/validate valid and invalid inputs exercise rejection.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_field_copy in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_field_copy_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_field_copy = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // (1) field copy onto the prototype: real instance + prototype method
  const team = classifyTeam({
    lead: { id: 1, name: "Kim" },
    members: [
      { id: 2, name: "Lee" },
      { id: 3, name: "Park" },
    ],
  });
  assert(team instanceof Team, "team should be a Team instance");
  assert(team.lead instanceof User, "team.lead should be a User instance");
  assert(
    team.lead.greet() === "hi Kim",
    "prototype method should work, got: " + team.lead.greet(),
  );
  assert(
    team.members[0]! instanceof User,
    "team.members[0]! should be a User instance",
  );
  assert(
    team.members[1]!.greet() === "hi Park",
    "array element prototype method should work",
  );

  // (2) WeakMap-guarded recursion terminates on a finite self-referential chain
  const node = classifyNode({
    value: 1,
    next: { value: 2, next: { value: 3 } },
  });
  assert(node instanceof Node, "node should be a Node instance");
  assert(node.next instanceof Node, "node.next should be a Node instance");
  assert(
    node.next.next instanceof Node,
    "node.next.next should be a Node instance",
  );
  assert(
    node.next.next.value === 3,
    "deep recursion should preserve the leaf value",
  );

  // (2b) a TRUE self-cycle rebuilds as a cyclic instance graph: the WeakMap-
  // registered allocator must be the prototyped instance, else either instanceof
  // fails or the back-reference does not close the cycle.
  type NodeSeed = { value: number; next?: NodeSeed };
  const cyclic: NodeSeed = { value: 7 };
  cyclic.next = cyclic;
  const rebuilt = classifyNode(cyclic);
  assert(rebuilt instanceof Node, "cyclic node should be a Node instance");
  assert(
    rebuilt.next === rebuilt,
    "self-cycle should rebuild as a self-reference",
  );
  assert(rebuilt.value === 7, "cyclic node value should be preserved");

  // (3) assertClassify throws on invalid input
  let threw = false;
  try {
    assertClassifyUser({ id: "not-a-number", name: "x" });
  } catch (e) {
    threw = true;
  }
  assert(threw, "assertClassifyUser should throw on invalid input");
  assert(
    assertClassifyUser({ id: 9, name: "Han" }) instanceof User,
    "assertClassifyUser should return a User instance on valid input",
  );

  // (4) validateClassify success / failure
  const ok = validateClassifyUser({ id: 5, name: "Choi" });
  assert(
    ok.success === true,
    "validateClassifyUser should succeed on valid input",
  );
  assert(
    ok.data instanceof User,
    "validateClassifyUser data should be a User instance",
  );
  const bad = validateClassifyUser({ id: "nope" });
  assert(
    bad.success === false,
    "validateClassifyUser should fail on invalid input",
  );
  assert(
    Array.isArray(bad.errors) && bad.errors.length > 0,
    "validateClassifyUser failure should populate errors",
  );
};
