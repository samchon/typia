package main

import (
  "strings"
  "testing"
)

func TestLlmEvaluationRejectsAliasCommentProbability(t *testing.T) {
  diagnostics := llmEvaluationDiagnosticsBuild(t, "alias-comment-probability", `import typia from "typia";

/** @probability 0.8 */
type Urgency = boolean;
type UrgencyChain = Urgency;
type Wrapper<T> = {
  /** Wrapped? */
  wrapped: T;
};
type InferWrapper<T> = T extends infer U ? U : never;
type ArrayInferWrapper<T> = T extends Array<infer U> ? U : never;
type TupleInferWrapper<T> = T extends [infer U] ? U : never;
type ObjectInferWrapper<T> = T extends { value: infer U } ? U : never;
interface IObjectInferBox<T> { value: T }
/** @probability 0.8 */
interface IAnnotatedInferBox { value: boolean }
type UnionInferWrapper<T> = T extends Array<infer U> ? U : never;
type AliasedArray = Urgency[];
type AliasedUnion = Urgency[] | string;
type NestedAliasedUnion = AliasedArray | string;
/** @probability 0.8 */
type AnnotatedArray = boolean[];
type NonDistributiveTrue<T> = (T | number) extends number ? Urgency : boolean;
type AnyConditional<T> = (T | number) extends string ? Urgency : boolean;
type ArrayCheck<T> = T[] extends number[] ? Urgency : boolean;
type DefaultWrapper<T = Urgency> = {
  /** Defaulted? */
  defaulted: T;
};
declare const knownUrgency: Urgency;
interface IIndexed {
  /** Selected? */ selected: Urgency;
  /** Ignored? */ ignored: boolean;
}
type IndexedUrgency = IIndexed["selected"];
interface IGenericIndexed<T> {
  /** Selected? */ selected: T;
}
type GenericIndexedUrgency = IGenericIndexed<Urgency>["selected"];
interface IInheritedIndexed<T> extends IGenericIndexed<T> {}
type InheritedIndexedUrgency = IInheritedIndexed<Urgency>["selected"];
type AliasIndexed<T> = IGenericIndexed<T>;
type AliasIndexedUrgency = AliasIndexed<Urgency>["selected"];
/** @probability invalid */
type Choice = "yes" | "no";
/** @probability 0.3 */
type Score = 1 | 2 | 3;
/** @probability 0.4 */
type SetChoice = "a" | "b";
typia.llm.evaluation<{
  /** First? */ first: Urgency;
  /** Second? */ second: UrgencyChain;
  /** Nested? */ nested: {
    /** Third? */
    third: Urgency;
  };
  /** Container? */ container: Wrapper<Urgency>;
  /** Default container? */ defaultContainer: DefaultWrapper;
  /** Known? */ known: typeof knownUrgency;
  /** Indexed? */ indexed: IndexedUrgency;
  /** Generic indexed? */ genericIndexed: GenericIndexedUrgency;
  /** Inherited indexed? */ inheritedIndexed: InheritedIndexedUrgency;
  /** Alias indexed? */ aliasIndexed: AliasIndexedUrgency;
  /** Inferred? */ inferred: InferWrapper<Urgency>;
  /** Array inferred? */ arrayInferred: ArrayInferWrapper<Urgency[]>;
  /** Tuple inferred? */ tupleInferred: TupleInferWrapper<[Urgency]>;
  /** Object inferred? */ objectInferred: ObjectInferWrapper<{ value: Urgency }>;
  /** Interface object inferred? */ interfaceObjectInferred: ObjectInferWrapper<IObjectInferBox<Urgency>>;
  /** Annotated interface inferred? */ annotatedInterfaceInferred: ObjectInferWrapper<IAnnotatedInferBox>;
  /** Union inferred? */ unionInferred: UnionInferWrapper<Urgency[] | string>;
  /** Aliased array inferred? */ aliasedArrayInferred: ArrayInferWrapper<AliasedArray>;
  /** Aliased union inferred? */ aliasedUnionInferred: UnionInferWrapper<AliasedUnion>;
  /** Nested aliased union inferred? */ nestedAliasedUnionInferred: UnionInferWrapper<NestedAliasedUnion>;
  /** Annotated array inferred? */ annotatedArrayInferred: ArrayInferWrapper<AnnotatedArray>;
  /** Non-distributive true? */ nonDistributiveTrue: NonDistributiveTrue<number>;
  /** Any conditional? */ anyConditional: AnyConditional<any>;
  /** Array check true? */ arrayCheckTrue: ArrayCheck<number>;
  /** Choice? */ choice: Choice;
  /** Score? */ score: Score;
  /** Set? */ set: SetChoice[];
}>();
typia.llm.evaluation<Pick<IIndexed, "selected">>();
`)
  for _, expected := range []string{
    "- $input.first\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.second\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.nested.third\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.container.wrapped\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.defaultContainer.defaulted\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.known\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.indexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.genericIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.inheritedIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.aliasIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.inferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.arrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.tupleInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.objectInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.interfaceObjectInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedInterfaceInferred\n  - LLM evaluation @probability on an object declaration is not supported",
    "- $input.unionInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.aliasedArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.aliasedUnionInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.nestedAliasedUnionInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.nonDistributiveTrue\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.anyConditional\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.arrayCheckTrue\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.choice\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.score\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.set\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.selected\n  - LLM evaluation @probability on a type alias is not supported",
  } {
    if !strings.Contains(diagnostics, expected) {
      t.Fatalf("llm.evaluation alias probability diagnostic missing %q:\n%s", expected, diagnostics)
    }
  }
}

func TestLlmEvaluationRejectsInterfaceCommentProbability(t *testing.T) {
  diagnostics := llmEvaluationDiagnosticsBuild(t, "interface-comment-probability", `import typia from "typia";

/** @probability 0.8 */
interface IDecision {
  /** Is it urgent? */
  urgent: boolean;
}
/** @probability 0.4 */
interface INested {
  /** Answer? */
  answer: boolean;
}
interface IInherited extends INested {}
typia.llm.evaluation<IDecision>();
typia.llm.evaluation<{
  /** Nested? */ nested: INested;
}>();
typia.llm.evaluation<IInherited>();
`)
  for _, expected := range []string{
    "- $input\n  - LLM evaluation @probability on an object declaration is not supported",
    "- $input.nested\n  - LLM evaluation @probability on an object declaration is not supported",
  } {
    if !strings.Contains(diagnostics, expected) {
      t.Fatalf("llm.evaluation interface probability diagnostic missing %q:\n%s", expected, diagnostics)
    }
  }
  if count := strings.Count(diagnostics, "- $input\n  - LLM evaluation @probability on an object declaration is not supported"); count != 2 {
    t.Fatalf("llm.evaluation should reject both direct and inherited interface comments, got %d:\n%s", count, diagnostics)
  }
}

func TestLlmEvaluationRejectsEnumCommentProbability(t *testing.T) {
  diagnostics := llmEvaluationDiagnosticsBuild(t, "enum-comment-probability", `import typia from "typia";

/** @probability 0.8 */
enum Choice {
  yes = "yes",
  no = "no",
}
typia.llm.evaluation<{
  /** Choice? */ choice: Choice;
}>();
`)
  if !strings.Contains(diagnostics, "- $input.choice\n  - LLM evaluation @probability on an enum declaration is not supported") {
    t.Fatalf("llm.evaluation enum declaration diagnostic missing:\n%s", diagnostics)
  }
}

func TestLlmEvaluationAcceptsUnannotatedAliasAndPropertyComment(t *testing.T) {
  llmEvaluationAccepts(t, "alias-probability-valid", `import typia from "typia";

/** @probability 0.9 */
type Unused = boolean;
/** @probability 0.8 */
type AnnotatedString = string;
type InferFalse<T> = T extends Array<infer U> ? U : boolean;
/** @probability 0.8 */
type AnnotatedTuple = [boolean];
type TupleDiscard<T> = T extends [infer U] ? boolean : never;
type Discards<T> = boolean;
type Selects<T> = T extends true ? Unused : boolean;
type SelectsWide<T> = T extends number ? Unused : boolean;
type NonDistributive<T> = (T | number) extends string ? Unused : boolean;
type NonDistributiveTrue<T> = (T | number) extends number ? Unused : boolean;
type ArrayCheck<T> = T[] extends number[] ? Unused : boolean;
interface ISource {
  /** Chosen? */ chosen: boolean;
  /** Dropped? */ dropped: Unused;
}
type Chosen = ISource["chosen"];
class ClassDecision {
  static ignored: Unused;
  /** Answer? */ answer!: boolean;
}
/** Ordinary alias. */
type Urgency = boolean;
type UrgencyChain = Urgency;
typia.llm.evaluation<{
  /** First? */ first: Urgency;
  /** Second? @probability 0.8 */ second: UrgencyChain;
  /** Third? */ third: Discards<Unused>;
  /** Fourth? */ fourth: Selects<false>;
  /** Sixth? */ sixth: SelectsWide<string>;
  /** Seventh? */ seventh: NonDistributive<string>;
  /** Eighth? */ eighth: NonDistributiveTrue<string>;
  /** Ninth? */ ninth: ArrayCheck<string>;
  /** Tenth? */ tenth: InferFalse<AnnotatedString>;
  /** Eleventh? */ eleventh: TupleDiscard<AnnotatedTuple>;
  /** Fifth? */ fifth: Chosen;
  /** Class? */ decision: ClassDecision;
}>();
typia.llm.evaluation<Pick<ISource, "chosen">>();
`)
}
