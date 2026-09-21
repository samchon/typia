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
type ParenthesizedInferWrapper<T> = T extends (infer U) ? U : never;
type ArrayInferWrapper<T> = T extends Array<infer U> ? U : never;
type TupleInferWrapper<T> = T extends [infer U] ? U : never;
type OptionalTupleInferWrapper<T> = T extends [value?: infer U] ? U : never;
type RestTupleInferWrapper<T> = T extends [infer U, ...infer R] ? U : never;
type TailTupleInferWrapper<T> = T extends [...infer R, infer U] ? U : never;
type RestFirstWrapper<T> = T extends [boolean, ...infer R] ? R[0] : never;
type RestFirstStringWrapper<T> = T extends [boolean, ...infer R] ? R["0"] : never;
type ReadonlyTupleInferWrapper<T> = T extends readonly [infer U] ? U : never;
type ReadonlyArrayInferWrapper<T> = T extends ReadonlyArray<infer U> ? U : never;
type ReadonlyOperatorArrayInferWrapper<T> = T extends readonly (infer U)[] ? U : never;
/** @probability 0.8 */
type AnnotatedReadonlyArray = readonly boolean[];
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
interface INumericIndexed {
  /** Selected? */ 0: Urgency;
  /** Ignored? */ 1: boolean;
}
type NumericIndexedUrgency = INumericIndexed[0];
type TupleStringIndexedUrgency = [Urgency, boolean]["0"];
type AliasTupleUrgency = [Urgency, boolean];
type AliasedTupleIndexedUrgency = AliasTupleUrgency[0];
/** @probability 0.8 */
type AnnotatedTupleObject = [boolean, boolean];
type AnnotatedTupleObjectIndexed = AnnotatedTupleObject[0];
/** @probability 0.8 */
interface IAnnotatedIndexedObject { selected: boolean }
type AnnotatedIndexedObject = IAnnotatedIndexedObject["selected"];
/** @probability 0.8 */
interface IAnnotatedIndexedBase { selected: boolean }
interface IInheritedAnnotatedIndexed extends IAnnotatedIndexedBase {}
type InheritedAnnotatedIndexed = IInheritedAnnotatedIndexed["selected"];
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
  /** Numeric indexed? */ numericIndexed: NumericIndexedUrgency;
  /** Tuple string indexed? */ tupleStringIndexed: TupleStringIndexedUrgency;
  /** Aliased tuple indexed? */ aliasedTupleIndexed: AliasedTupleIndexedUrgency;
  /** Annotated tuple object indexed? */ annotatedTupleObjectIndexed: AnnotatedTupleObjectIndexed;
  /** Annotated indexed object? */ annotatedIndexedObject: AnnotatedIndexedObject;
  /** Inherited annotated indexed? */ inheritedAnnotatedIndexed: InheritedAnnotatedIndexed;
  /** Generic indexed? */ genericIndexed: GenericIndexedUrgency;
  /** Inherited indexed? */ inheritedIndexed: InheritedIndexedUrgency;
  /** Alias indexed? */ aliasIndexed: AliasIndexedUrgency;
  /** Inferred? */ inferred: InferWrapper<Urgency>;
  /** Parenthesized inferred? */ parenthesizedInferred: ParenthesizedInferWrapper<Urgency>;
  /** Array inferred? */ arrayInferred: ArrayInferWrapper<Urgency[]>;
  /** Tuple via array inferred? */ tupleViaArrayInferred: ArrayInferWrapper<[Urgency]>;
  /** Tuple inferred? */ tupleInferred: TupleInferWrapper<[Urgency]>;
  /** Optional tuple inferred? */ optionalTupleInferred: OptionalTupleInferWrapper<[value?: Urgency]>;
  /** Required to optional tuple inferred? */ requiredToOptionalTupleInferred: OptionalTupleInferWrapper<[value: Urgency]>;
  /** Rest tuple inferred? */ restTupleInferred: RestTupleInferWrapper<[Urgency, boolean, number]>;
  /** Tail tuple inferred? */ tailTupleInferred: TailTupleInferWrapper<[boolean, Urgency]>;
  /** Rest first inferred? */ restFirstInferred: RestFirstWrapper<[boolean, Urgency, boolean]>;
  /** Rest first string inferred? */ restFirstStringInferred: RestFirstStringWrapper<[boolean, Urgency, boolean]>;
  /** Readonly tuple inferred? */ readonlyTupleInferred: ReadonlyTupleInferWrapper<readonly [Urgency]>;
  /** Readonly array inferred? */ readonlyArrayInferred: ReadonlyArrayInferWrapper<readonly Urgency[]>;
  /** Readonly operator array inferred? */ readonlyOperatorArrayInferred: ReadonlyOperatorArrayInferWrapper<readonly Urgency[]>;
  /** Annotated readonly array inferred? */ annotatedReadonlyArrayInferred: ReadonlyArrayInferWrapper<AnnotatedReadonlyArray>;
  /** Readonly tuple via array inferred? */ readonlyTupleViaArrayInferred: ReadonlyArrayInferWrapper<readonly [Urgency]>;
  /** Readonly multi-tuple via array inferred? */ readonlyMultiTupleViaArrayInferred: ReadonlyArrayInferWrapper<readonly [Urgency, boolean]>;
  /** Readonly reference via operator inferred? */ readonlyReferenceViaOperatorInferred: ReadonlyOperatorArrayInferWrapper<ReadonlyArray<Urgency>>;
  /** Mutable reference via readonly reference inferred? */ mutableReferenceViaReadonlyReferenceInferred: ReadonlyArrayInferWrapper<Array<Urgency>>;
  /** Mutable tuple via readonly operator inferred? */ mutableTupleViaReadonlyOperatorInferred: ReadonlyOperatorArrayInferWrapper<[Urgency]>;
  /** Readonly tuple via readonly operator inferred? */ readonlyTupleViaReadonlyOperatorInferred: ReadonlyOperatorArrayInferWrapper<readonly [Urgency]>;
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
    "- $input.numericIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.tupleStringIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.aliasedTupleIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedTupleObjectIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedIndexedObject\n  - LLM evaluation @probability on an object declaration is not supported",
    "- $input.inheritedAnnotatedIndexed\n  - LLM evaluation @probability on an object declaration is not supported",
    "- $input.genericIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.inheritedIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.aliasIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.inferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.parenthesizedInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.arrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.tupleViaArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.tupleInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.optionalTupleInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.requiredToOptionalTupleInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.restTupleInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.tailTupleInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.restFirstInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.restFirstStringInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyTupleInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyOperatorArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedReadonlyArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyTupleViaArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyMultiTupleViaArrayInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyReferenceViaOperatorInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.mutableReferenceViaReadonlyReferenceInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.mutableTupleViaReadonlyOperatorInferred\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyTupleViaReadonlyOperatorInferred\n  - LLM evaluation @probability on a type alias is not supported",
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
  if count := strings.Count(diagnostics, "- $input.inferred\n  - LLM evaluation @probability on a type alias is not supported"); count != 1 {
    t.Fatalf("direct infer alias diagnostic must appear once, got %d:\n%s", count, diagnostics)
  }
  if count := strings.Count(diagnostics, "- $input.parenthesizedInferred\n  - LLM evaluation @probability on a type alias is not supported"); count != 1 {
    t.Fatalf("parenthesized infer alias diagnostic must appear once, got %d:\n%s", count, diagnostics)
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
type ArrayDiscard<T> = T extends Array<infer U> ? boolean : never;
type ReadonlyArrayDiscard<T> = T extends ReadonlyArray<infer U> ? boolean : never;
type ReadonlyTupleDiscard<T> = T extends readonly [infer U] ? boolean : never;
type RestTupleDiscard<T> = T extends [infer U, ...infer R] ? boolean : never;
type RestTupleMismatch<T> = T extends [infer U, ...infer R] ? Unused : boolean;
type RestFirst<T> = T extends [boolean, ...infer R] ? R[0] : never;
type RestFirstString<T> = T extends [boolean, ...infer R] ? R["0"] : never;
type MutableTupleOnly<T> = T extends [infer U] ? Unused : boolean;
type OptionalTupleInfer<T> = T extends [infer U] ? U : boolean;
type ReadonlyOptionalTupleInfer<T> = T extends readonly [infer U] ? U : boolean;
type MutableArrayOnly<T> = T extends Array<infer U> ? Unused : boolean;
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
interface INumericSource {
  0: boolean;
  1: Unused;
}
type NumericChosen = INumericSource[0];
type TupleStringChosen = [boolean, Unused]["0"];
type ParenthesizedTupleChosen = ([boolean, Unused])[0];
type TupleSource = [boolean, Unused];
type AliasedTupleChosen = TupleSource[0];
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
  /** Array discarded? */ arrayDiscarded: ArrayDiscard<AnnotatedTuple>;
  /** Readonly array discarded? */ readonlyArrayDiscarded: ReadonlyArrayDiscard<AnnotatedTuple>;
  /** Readonly discarded? */ readonlyDiscarded: ReadonlyTupleDiscard<AnnotatedTuple>;
  /** Rest discarded? */ restDiscarded: RestTupleDiscard<AnnotatedTuple>;
  /** Rest mismatch? */ restMismatch: RestTupleMismatch<[]>;
  /** Rest selected? */ restSelected: RestFirst<[boolean, boolean, Unused]>;
  /** Rest string selected? */ restStringSelected: RestFirstString<[boolean, boolean, Unused]>;
  /** Mutable tuple false? */ mutableTupleFalse: MutableTupleOnly<readonly [boolean]>;
  /** Optional tuple false? */ optionalTupleFalse: OptionalTupleInfer<[Unused?]>;
  /** Named optional tuple false? */ namedOptionalTupleFalse: OptionalTupleInfer<[value?: Unused]>;
  /** Readonly optional tuple false? */ readonlyOptionalTupleFalse: ReadonlyOptionalTupleInfer<readonly [Unused?]>;
  /** Mutable array false? */ mutableArrayFalse: MutableArrayOnly<readonly boolean[]>;
  /** Mutable array reference false? */ mutableArrayReferenceFalse: MutableArrayOnly<ReadonlyArray<boolean>>;
  /** Mutable array tuple false? */ mutableArrayTupleFalse: MutableArrayOnly<readonly [boolean]>;
  /** Twelfth? */ twelfth: NumericChosen;
  /** Tuple string chosen? */ tupleStringChosen: TupleStringChosen;
  /** Parenthesized tuple chosen? */ parenthesizedTupleChosen: ParenthesizedTupleChosen;
  /** Aliased tuple chosen? */ aliasedTupleChosen: AliasedTupleChosen;
  /** Fifth? */ fifth: Chosen;
  /** Class? */ decision: ClassDecision;
}>();
typia.llm.evaluation<Pick<ISource, "chosen">>();
`)
}
