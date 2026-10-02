package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestObjectCustomTagValidationTransform verifies object-level predicates alongside structural checks.
//
// Object tags constrain the container itself; structural property validation cannot substitute for authored key-count or custom predicates.
//
// 1. Two object cardinality bounds and a side-effecting tag exercise wrapper emission without claiming its runtime call count.
// 2. Emission contains Object.keys with both one-key minimum and two-key maximum and retains the side-effecting custom tag reference.
//
// @evidence contracts/testing.md#behavioral-verification Emission contains Object.keys with both one-key minimum and two-key maximum and retains the side-effecting custom tag reference.
// @evidence contracts/testing.md#independent-expectations Object tags constrain the container itself; structural property validation cannot substitute for authored key-count or custom predicates.
// @evidence contracts/testing.md#distinguishing-cases Two object cardinality bounds and a side-effecting tag exercise wrapper emission without claiming its runtime call count.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestObjectCustomTagValidationTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestObjectCustomTagValidationTransform(t *testing.T) {
  project := objectCustomTagValidationProject(t)
  js := objectCustomTagValidationTransform(t, project, "js")
  if !strings.Contains(js, "Object.keys") || !strings.Contains(js, "length >= 1") || !strings.Contains(js, "length <= 2") {
    t.Fatalf("object custom tag validation was not emitted:\n%s", js)
  }
  if !strings.Contains(js, "__objectTagCount") {
    t.Fatalf("side-effecting object custom tag validation was not emitted:\n%s", js)
  }
}

func objectCustomTagValidationProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "object-custom-tag-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(objectCustomTagValidationTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(objectCustomTagValidationSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func objectCustomTagValidationTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("object custom tag transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

const objectCustomTagValidationTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const objectCustomTagValidationSource = `import typia from "typia";
import type { tags } from "typia";

type MinEntries<Value extends number> = tags.TagBase<{
  target: "object";
  kind: "minEntries";
  value: Value;
  validate: ` + "`Object.keys($input).length >= ${Value}`" + `;
  exclusive: true;
}>;

type MaxEntries<Value extends number> = tags.TagBase<{
  target: "object";
  kind: "maxEntries";
  value: Value;
  validate: ` + "`Object.keys($input).length <= ${Value}`" + `;
  exclusive: true;
}>;

type CountedMinEntries<Value extends number> = tags.TagBase<{
  target: "object";
  kind: "countedMinEntries";
  value: Value;
  validate: ` + "`((globalThis.__objectTagCount = (globalThis.__objectTagCount ?? 0) + 1), Object.keys($input).length >= ${Value})`" + `;
  exclusive: true;
}>;

type Filters = Partial<{
  user_id: number;
  topic_id: number;
  post_id: number;
}> & MinEntries<1>;

type BoundedFilters = Partial<{
  user_id: number;
  topic_id: number;
  post_id: number;
}> & MinEntries<1> & MaxEntries<2>;

type TaggedUnion =
  | ({
      type: "a";
      value?: number;
    } & MinEntries<2>)
  | {
      type: "b";
    };

type CountedUnion =
  | ({
      type: "counted";
      value: number;
    } & CountedMinEntries<2>)
  | {
      type: "plain";
    };

const isFilters = typia.createIs<Filters>();
const validateFilters = typia.createValidate<Filters>();
const equalsFilters = typia.createEquals<Filters>();
const validateEqualsFilters = typia.createValidateEquals<Filters>();
const isBoundedFilters = typia.createIs<BoundedFilters>();
const validateBoundedFilters = typia.createValidate<BoundedFilters>();
const isTaggedUnion = typia.createIs<TaggedUnion>();
const validateTaggedUnion = typia.createValidate<TaggedUnion>();
const assertTaggedUnion = typia.createAssert<TaggedUnion>();
const isCountedUnion = typia.createIs<CountedUnion>();
const validateCountedUnion = typia.createValidate<CountedUnion>();
const assertCountedUnion = typia.createAssert<CountedUnion>();

type Container = {
  union: TaggedUnion;
  other: string;
};

const validateContainer = typia.createValidate<Container>();
const assertContainer = typia.createAssert<Container>();

const capture = (task: () => void): null | { path?: string; expected?: string } => {
  try {
    task();
    return null;
  } catch (error) {
    return error as { path?: string; expected?: string };
  }
};

const withTagCount = (task: () => unknown) => {
  (globalThis as any).__objectTagCount = 0;
  const value = task();
  return { value, count: (globalThis as any).__objectTagCount ?? 0 };
};

export const run = () => ({
  emptyIs: isFilters({}),
  validIs: isFilters({ user_id: 1 }),
  emptyValidate: validateFilters({}).success,
  validValidate: validateFilters({ user_id: 1 }).success,
  emptyEquals: equalsFilters({}),
  validEquals: equalsFilters({ user_id: 1 }),
  emptyValidateEquals: validateEqualsFilters({}).success,
  validValidateEquals: validateEqualsFilters({ user_id: 1 }).success,
  directEmptyEquals: typia.equals<Filters>({}),
  directValidEquals: typia.equals<Filters>({ user_id: 1 }),
  directEmptyValidateEquals: typia.validateEquals<Filters>({}).success,
  directValidValidateEquals: typia.validateEquals<Filters>({
    user_id: 1,
  }).success,
  boundedEmptyIs: isBoundedFilters({}),
  boundedSingleIs: isBoundedFilters({ user_id: 1 }),
  boundedTooManyIs: isBoundedFilters({
    user_id: 1,
    topic_id: 2,
    post_id: 3,
  }),
  boundedEmptyValidate: validateBoundedFilters({}).success,
  boundedSingleValidate: validateBoundedFilters({ user_id: 1 }).success,
  boundedTooManyValidate: validateBoundedFilters({
    user_id: 1,
    topic_id: 2,
    post_id: 3,
  }).success,
  unionInvalidAIs: isTaggedUnion({ type: "a" }),
  unionValidAIs: isTaggedUnion({ type: "a", value: 1 }),
  unionValidBIs: isTaggedUnion({ type: "b" }),
  unionInvalidAValidate: validateTaggedUnion({ type: "a" }),
  unionInvalidAAssert: capture(() => assertTaggedUnion({ type: "a" })),
  unionValidAValidate: validateTaggedUnion({ type: "a", value: 1 }).success,
  unionValidBValidate: validateTaggedUnion({ type: "b" }).success,
  unionValidBAssert: capture(() => assertTaggedUnion({ type: "b" })),
  countedUnionValid: withTagCount(() =>
    isCountedUnion({ type: "counted", value: 1 }),
  ),
  countedUnionValidValidate: withTagCount(() =>
    validateCountedUnion({ type: "counted", value: 1 }).success,
  ),
  countedUnionValidAssert: withTagCount(() =>
    capture(() => assertCountedUnion({ type: "counted", value: 1 })),
  ),
  countedUnionPlain: withTagCount(() => isCountedUnion({ type: "plain" })),
  containerValidBAssert: capture(() =>
    assertContainer({ union: { type: "b" }, other: "ok" }),
  ),
  containerInvalidOtherAssert: capture(() =>
    assertContainer({ union: { type: "b" }, other: 1 as any }),
  ),
  containerInvalidOtherValidate: validateContainer({
    union: { type: "b" },
    other: 1 as any,
  }),
});
`
