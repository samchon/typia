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
/** @probability 0.8 */
type AnnotatedTupleKey = 0;
type AnnotatedTupleKeyIndexed = [boolean, boolean][AnnotatedTupleKey];
/** @probability 0.8 */
type AnnotatedPropertyKey = "selected";
interface IPlainIndexed { selected: boolean; ignored: boolean }
type AnnotatedPropertyKeyIndexed = IPlainIndexed[AnnotatedPropertyKey];
interface IAnnotatedSourceProperty {
  /** @probability 0.8 */ selected: boolean;
  ignored: boolean;
}
type AnnotatedSourcePropertyIndexed = IAnnotatedSourceProperty["selected"];
class AnnotatedGetterSource {
  /** @probability 0.8 */ get selected(): boolean { return true; }
  get ignored(): boolean { return false; }
}
type AnnotatedGetterIndexed = AnnotatedGetterSource["selected"];
class AnnotatedInferredGetterSource {
  /** @probability 0.8 */ get selected() { return true; }
}
type AnnotatedInferredGetterIndexed = AnnotatedInferredGetterSource["selected"];
class AnnotatedSetterSource {
  get selected(): boolean { return true; }
  /** @probability 0.8 */ set selected(value: boolean) {}
}
type AnnotatedSetterIndexed = AnnotatedSetterSource["selected"];
interface IAnnotatedIndexSignature {
  /** @probability 0.8 */
  [key: string]: boolean;
}
type AnnotatedIndexSignatureIndexed = IAnnotatedIndexSignature["selected"];
type AnnotatedStringIndexNumericKey = IAnnotatedIndexSignature[0];
type AnnotatedStringIndexBroadKey = IAnnotatedIndexSignature[string];
interface IAnnotatedNumericIndexSignature {
  [key: string]: boolean;
  /** @probability 0.8 */
  [key: number]: boolean;
}
type AnnotatedNumericIndexSignatureIndexed = IAnnotatedNumericIndexSignature[0];
type AnnotatedNumericIndexBroadKey = IAnnotatedNumericIndexSignature[number];
interface IOverlappingNumericTemplateIndexes {
  [key: number]: boolean;
  /** @probability 0.8 */
  [key: `+"`"+`${number}`+"`"+`]: boolean;
}
type AnnotatedOverlappingTemplateIndex = IOverlappingNumericTemplateIndexes["1"];
interface IInheritedIndexBase {
  /** @probability 0.8 */
  [key: string]: boolean;
}
interface IInheritedIndexSource extends IInheritedIndexBase {}
type InheritedIndexSignatureIndexed = IInheritedIndexSource["selected"];
class AnnotatedClassIndexSource {
  /** @probability 0.8 */
  [key: string]: boolean;
}
type AnnotatedClassIndexChosen = AnnotatedClassIndexSource["selected"];
interface IUnionIndexArm {
  /** @probability 0.8 */
  [key: string]: boolean;
}
interface IPlainUnionIndexArm { [key: string]: boolean }
type AnnotatedUnionIndexChosen = (IUnionIndexArm | IPlainUnionIndexArm)["selected"];
interface IGenericIndexSource<T> { [key: string]: T }
type GenericIndexValueUrgency = IGenericIndexSource<Urgency>["selected"];
type GenericIntersectionIndexSource<T> = IGenericIndexSource<T> & { fixed: boolean };
type GenericIntersectionIndexUrgency = GenericIntersectionIndexSource<Urgency>["selected"];
type AliasTupleUrgency = [Urgency, boolean];
type AliasedTupleIndexedUrgency = AliasTupleUrgency[0];
type ConditionalTuple<T> = T extends true ? [Urgency, boolean] : [boolean, boolean];
type ConditionalTupleIndexedUrgency = ConditionalTuple<true>[0];
type ConditionalTupleParameter<T extends boolean, U> = T extends true ? U : [boolean, boolean];
type ConditionalParameterIndexedUrgency = ConditionalTupleParameter<true, [Urgency, boolean]>[0];
type RestTupleIndexedUrgency = [boolean, ...Urgency[]][2];
/** @probability 0.8 */
type AnnotatedUnionRestArm = true[];
type AnnotatedUnionRest = AnnotatedUnionRestArm | false[];
type AnnotatedUnionRestIndexed = [boolean, ...AnnotatedUnionRest][1];
type UnionFixedRestSelected = [Urgency, boolean] | [boolean, boolean];
type UnionFixedRestIndexedUrgency = [boolean, ...UnionFixedRestSelected][1];
type NestedNonEmptyRest = [boolean, ...boolean[]] | [boolean];
type NestedRestWithUrgency = [boolean, ...NestedNonEmptyRest, Urgency];
type NestedRestUnion = NestedRestWithUrgency | [boolean, boolean, boolean];
type NestedRestIndexedUrgency = [boolean, ...NestedRestUnion][3];
/** @probability 0.8 */
type AnnotatedFixedRestBeforeSuffix = [boolean, boolean];
type AnnotatedFixedRestSuffix = [boolean, ...AnnotatedFixedRestBeforeSuffix, boolean][3];
type ArrayInferBranchTrue<T> = T extends Array<infer U> ? (U extends boolean ? Urgency : boolean) : boolean;
type ArrayInferBranchIndexedUrgency = ArrayInferBranchTrue<[boolean, ...boolean[]]>;
type ArrayInferRestBranch<T> = T extends Array<infer U> ? (U extends string ? Urgency : boolean) : boolean;
type ArrayInferRestBranchUrgency = ArrayInferRestBranch<[boolean, ...string[]]>;
type ReadonlyRestTupleIndexedUrgency = (readonly [boolean, ...Urgency[]])[2];
type SuffixedRestTupleIndexedUrgency = [boolean, ...boolean[], Urgency][3];
type FixedSpreadIndexedUrgency = [boolean, ...[Urgency, boolean]][1];
type AliasSpreadSource = [Urgency, boolean];
type AliasSpreadIndexedUrgency = [boolean, ...AliasSpreadSource][1];
/** @probability 0.8 */
type AnnotatedSpreadSource = [boolean, boolean];
type AnnotatedSpreadIndexed = [boolean, ...AnnotatedSpreadSource][1];
/** @probability 0.8 */
type AnnotatedOpenRest = boolean[];
type AnnotatedOpenRestIndexed = [boolean, ...AnnotatedOpenRest][1];
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
  /** Annotated tuple key indexed? */ annotatedTupleKeyIndexed: AnnotatedTupleKeyIndexed;
  /** Annotated property key indexed? */ annotatedPropertyKeyIndexed: AnnotatedPropertyKeyIndexed;
  /** Annotated source property indexed? */ annotatedSourcePropertyIndexed: AnnotatedSourcePropertyIndexed;
  /** Annotated getter indexed? */ annotatedGetterIndexed: AnnotatedGetterIndexed;
  /** Annotated inferred getter indexed? */ annotatedInferredGetterIndexed: AnnotatedInferredGetterIndexed;
  /** Annotated setter indexed? */ annotatedSetterIndexed: AnnotatedSetterIndexed;
  /** Annotated index signature indexed? */ annotatedIndexSignatureIndexed: AnnotatedIndexSignatureIndexed;
  /** String index with numeric key? */ annotatedStringIndexNumericKey: AnnotatedStringIndexNumericKey;
  /** String index with broad key? */ annotatedStringIndexBroadKey: AnnotatedStringIndexBroadKey;
  /** Annotated numeric index signature indexed? */ annotatedNumericIndexSignatureIndexed: AnnotatedNumericIndexSignatureIndexed;
  /** Numeric index with broad key? */ annotatedNumericIndexBroadKey: AnnotatedNumericIndexBroadKey;
  /** Overlapping template index? */ annotatedOverlappingTemplateIndex: AnnotatedOverlappingTemplateIndex;
  /** Inherited index signature indexed? */ inheritedIndexSignatureIndexed: InheritedIndexSignatureIndexed;
  /** Class index signature indexed? */ annotatedClassIndexChosen: AnnotatedClassIndexChosen;
  /** Union index signature indexed? */ annotatedUnionIndexChosen: AnnotatedUnionIndexChosen;
  /** Generic index value? */ genericIndexValue: GenericIndexValueUrgency;
  /** Generic intersection index value? */ genericIntersectionIndexValue: GenericIntersectionIndexUrgency;
  /** Aliased tuple indexed? */ aliasedTupleIndexed: AliasedTupleIndexedUrgency;
  /** Conditional tuple indexed? */ conditionalTupleIndexed: ConditionalTupleIndexedUrgency;
  /** Conditional parameter indexed? */ conditionalParameterIndexed: ConditionalParameterIndexedUrgency;
  /** Rest tuple indexed? */ restTupleIndexed: RestTupleIndexedUrgency;
  /** Annotated union rest indexed? */ annotatedUnionRestIndexed: AnnotatedUnionRestIndexed;
  /** Union fixed rest indexed? */ unionFixedRestIndexed: UnionFixedRestIndexedUrgency;
  /** Nested rest indexed? */ nestedRestIndexed: NestedRestIndexedUrgency;
  /** Annotated fixed rest suffix? */ annotatedFixedRestSuffix: AnnotatedFixedRestSuffix;
  /** Array infer branch indexed? */ arrayInferBranchIndexed: ArrayInferBranchIndexedUrgency;
  /** Array infer rest branch? */ arrayInferRestBranch: ArrayInferRestBranchUrgency;
  /** Readonly rest tuple indexed? */ readonlyRestTupleIndexed: ReadonlyRestTupleIndexedUrgency;
  /** Suffixed rest tuple indexed? */ suffixedRestTupleIndexed: SuffixedRestTupleIndexedUrgency;
  /** Fixed spread indexed? */ fixedSpreadIndexed: FixedSpreadIndexedUrgency;
  /** Alias spread indexed? */ aliasSpreadIndexed: AliasSpreadIndexedUrgency;
  /** Annotated spread indexed? */ annotatedSpreadIndexed: AnnotatedSpreadIndexed;
  /** Annotated open rest indexed? */ annotatedOpenRestIndexed: AnnotatedOpenRestIndexed;
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
    "- $input.annotatedTupleKeyIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedPropertyKeyIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedSourcePropertyIndexed\n  - LLM evaluation @probability on an indexed source property is not supported",
    "- $input.annotatedGetterIndexed\n  - LLM evaluation @probability on an indexed source property is not supported",
    "- $input.annotatedInferredGetterIndexed\n  - LLM evaluation @probability on an indexed source property is not supported",
    "- $input.annotatedSetterIndexed\n  - LLM evaluation @probability on an indexed source property is not supported",
    "- $input.annotatedIndexSignatureIndexed\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.annotatedStringIndexNumericKey\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.annotatedStringIndexBroadKey\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.annotatedNumericIndexSignatureIndexed\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.annotatedNumericIndexBroadKey\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.annotatedOverlappingTemplateIndex\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.inheritedIndexSignatureIndexed\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.annotatedClassIndexChosen\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.annotatedUnionIndexChosen\n  - LLM evaluation @probability on an indexed source index signature is not supported",
    "- $input.genericIndexValue\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.genericIntersectionIndexValue\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.aliasedTupleIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.conditionalTupleIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.conditionalParameterIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.restTupleIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedUnionRestIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.unionFixedRestIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.nestedRestIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedFixedRestSuffix\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.arrayInferBranchIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.arrayInferRestBranch\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.readonlyRestTupleIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.suffixedRestTupleIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.fixedSpreadIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.aliasSpreadIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedSpreadIndexed\n  - LLM evaluation @probability on a type alias is not supported",
    "- $input.annotatedOpenRestIndexed\n  - LLM evaluation @probability on a type alias is not supported",
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
type ArrayInferBranch<T> = T extends Array<infer U> ? (U extends string ? Unused : boolean) : boolean;
type ArrayInferBranchChosen = ArrayInferBranch<[boolean, ...boolean[]]>;
type ArrayInferRestFalse<T> = T extends Array<infer U> ? (U extends number ? Unused : boolean) : boolean;
type ArrayInferRestFalseChosen = ArrayInferRestFalse<[boolean, ...string[]]>;
type Discards<T> = boolean;
type Selects<T> = T extends true ? Unused : boolean;
type SelectsNeverUnion<T> = T extends true ? Unused : boolean;
type NeverUnionChosen = SelectsNeverUnion<never | false>;
type NeverOnlyChosen = SelectsNeverUnion<never | never> | boolean;
type UnknownUnionChosen = SelectsNeverUnion<unknown | true>;
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
/** @probability 0.8 */
type UnselectedKey = "ignored";
type ConditionalKey<T> = T extends true ? UnselectedKey : "selected";
interface IKeyDecision { selected: boolean; ignored: boolean }
type ConditionalKeyChosen = IKeyDecision[ConditionalKey<false>];
interface IUnselectedSourceProperty {
  selected: boolean;
  /** @probability 0.8 */ ignored: boolean;
}
type UnselectedSourcePropertyChosen = IUnselectedSourceProperty["selected"];
class UnselectedGetterSource {
  get selected(): boolean { return true; }
  /** @probability 0.8 */ get ignored(): boolean { return false; }
}
type UnselectedGetterChosen = UnselectedGetterSource["selected"];
interface IUnselectedStringIndexSignature {
  /** @probability 0.8 */
  [key: string]: boolean;
  [key: number]: boolean;
}
type UnselectedStringIndexSignatureChosen = IUnselectedStringIndexSignature[0];
type NumericStringIndexSignatureChosen = IUnselectedStringIndexSignature["0"];
type DecimalStringIndexSignatureChosen = IUnselectedStringIndexSignature["1.5"];
type ExponentStringIndexSignatureChosen = IUnselectedStringIndexSignature["1e-7"];
interface IShadowedIndexBase {
  /** @probability 0.8 */
  [key: string]: boolean;
}
interface IShadowedIndexChild extends IShadowedIndexBase { [key: string]: boolean }
type ShadowedIndexChosen = IShadowedIndexChild["selected"];
interface IImplementedAnnotatedIndex {
  /** @probability 0.8 */
  [key: number]: boolean;
}
class ImplementsButDoesNotInheritIndex implements IImplementedAnnotatedIndex {
  [key: string]: boolean;
}
type ImplementedIndexNotInherited = ImplementsButDoesNotInheritIndex[0];
interface INumericStringIndexTypeCheck {
  [key: string]: "string" | "number";
  [key: number]: "number";
}
type AssertTrue<T extends true> = T;
type NumericStringPrefersNumber = AssertTrue<INumericStringIndexTypeCheck["0"] extends "number" ? true : false>;
type DecimalStringPrefersNumber = AssertTrue<INumericStringIndexTypeCheck["1.5"] extends "number" ? true : false>;
type ExponentStringPrefersNumber = AssertTrue<INumericStringIndexTypeCheck["1e-7"] extends "number" ? true : false>;
interface IExplicitOverIndexSignature {
  /** @probability 0.8 */
  [key: string]: boolean;
  selected: boolean;
}
type ExplicitOverIndexSignatureChosen = IExplicitOverIndexSignature["selected"];
type ParenthesizedTupleChosen = ([boolean, Unused])[0];
type TupleSource = [boolean, Unused];
type AliasedTupleChosen = TupleSource[0];
type ConditionalTupleSource<T> = T extends true ? [boolean, Unused] : [Unused, boolean];
type ConditionalTupleChosen = ConditionalTupleSource<true>[0];
type ConditionalParameterSource<T extends boolean, U> = T extends true ? U : [Unused, boolean];
type ConditionalParameterChosen = ConditionalParameterSource<true, [boolean, Unused]>[0];
type RestTupleChosen = [Unused, ...boolean[]][2];
type UnionRest = true[] | false[];
type UnionRestChosen = [Unused, ...UnionRest][1];
type UnionFixedRest = [boolean, Unused] | [boolean, boolean];
type UnionFixedRestChosen = [boolean, ...UnionFixedRest][1];
type NestedNonEmptyRestChosen = [boolean, ...boolean[]] | [boolean];
type NestedRestWithUnused = [boolean, ...NestedNonEmptyRestChosen, Unused];
type NestedRestUnionChosen = NestedRestWithUnused | [boolean, boolean, boolean];
type NestedRestChosen = [boolean, ...NestedRestUnionChosen][2];
type UnionFixedRestSuffixChosen = [boolean, ...UnionFixedRest, boolean][1];
type FixedRestSuffixChosen = [boolean, ...[boolean, Unused], boolean][3];
type ReadonlyRestTupleChosen = (readonly [Unused, ...boolean[]])[2];
type SuffixedRestTupleChosen = [Unused, ...boolean[], boolean][3];
type FixedSpreadChosen = [boolean, ...[boolean, Unused]][1];
type FixedSpreadSuffixChosen = [boolean, ...[boolean, boolean], Unused][1];
type AliasSpreadSourceChosen = [boolean, Unused];
type AliasSpreadChosen = [boolean, ...AliasSpreadSourceChosen][1];
/** @probability 0.8 */
type UnusedAnnotatedSpreadSource = [boolean, boolean];
type UnusedAnnotatedSpreadChosen = [boolean, ...UnusedAnnotatedSpreadSource][0];
/** @probability 0.8 */
type UnusedAnnotatedOpenRest = boolean[];
type UnusedAnnotatedOpenRestChosen = [boolean, ...UnusedAnnotatedOpenRest][0];
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
  /** Never union chosen? */ neverUnionChosen: NeverUnionChosen;
  /** Never only chosen? */ neverOnlyChosen: NeverOnlyChosen;
  /** Unknown union chosen? */ unknownUnionChosen: UnknownUnionChosen;
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
  /** Array infer branch chosen? */ arrayInferBranchChosen: ArrayInferBranchChosen;
  /** Array infer rest false? */ arrayInferRestFalse: ArrayInferRestFalseChosen;
  /** Twelfth? */ twelfth: NumericChosen;
  /** Tuple string chosen? */ tupleStringChosen: TupleStringChosen;
  /** Conditional key chosen? */ conditionalKeyChosen: ConditionalKeyChosen;
  /** Unselected source property chosen? */ unselectedSourcePropertyChosen: UnselectedSourcePropertyChosen;
  /** Unselected getter chosen? */ unselectedGetterChosen: UnselectedGetterChosen;
  /** Unselected string index signature chosen? */ unselectedStringIndexSignatureChosen: UnselectedStringIndexSignatureChosen;
  /** Numeric string index signature chosen? */ numericStringIndexSignatureChosen: NumericStringIndexSignatureChosen;
  /** Decimal string index signature chosen? */ decimalStringIndexSignatureChosen: DecimalStringIndexSignatureChosen;
  /** Exponent string index signature chosen? */ exponentStringIndexSignatureChosen: ExponentStringIndexSignatureChosen;
  /** Shadowed index signature chosen? */ shadowedIndexChosen: ShadowedIndexChosen;
  /** Implemented index not inherited? */ implementedIndexNotInherited: ImplementedIndexNotInherited;
  /** Explicit over index signature chosen? */ explicitOverIndexSignatureChosen: ExplicitOverIndexSignatureChosen;
  /** Parenthesized tuple chosen? */ parenthesizedTupleChosen: ParenthesizedTupleChosen;
  /** Aliased tuple chosen? */ aliasedTupleChosen: AliasedTupleChosen;
  /** Conditional tuple chosen? */ conditionalTupleChosen: ConditionalTupleChosen;
  /** Conditional parameter chosen? */ conditionalParameterChosen: ConditionalParameterChosen;
  /** Rest tuple chosen? */ restTupleChosen: RestTupleChosen;
  /** Union rest chosen? */ unionRestChosen: UnionRestChosen;
  /** Union fixed rest chosen? */ unionFixedRestChosen: UnionFixedRestChosen;
  /** Nested rest chosen? */ nestedRestChosen: NestedRestChosen;
  /** Union fixed rest suffix chosen? */ unionFixedRestSuffixChosen: UnionFixedRestSuffixChosen;
  /** Fixed rest suffix chosen? */ fixedRestSuffixChosen: FixedRestSuffixChosen;
  /** Readonly rest tuple chosen? */ readonlyRestTupleChosen: ReadonlyRestTupleChosen;
  /** Suffixed rest tuple chosen? */ suffixedRestTupleChosen: SuffixedRestTupleChosen;
  /** Fixed spread chosen? */ fixedSpreadChosen: FixedSpreadChosen;
  /** Fixed spread suffix chosen? */ fixedSpreadSuffixChosen: FixedSpreadSuffixChosen;
  /** Alias spread chosen? */ aliasSpreadChosen: AliasSpreadChosen;
  /** Unused annotated spread chosen? */ unusedAnnotatedSpreadChosen: UnusedAnnotatedSpreadChosen;
  /** Unused annotated open rest chosen? */ unusedAnnotatedOpenRestChosen: UnusedAnnotatedOpenRestChosen;
  /** Fifth? */ fifth: Chosen;
  /** Class? */ decision: ClassDecision;
}>();
typia.llm.evaluation<Pick<ISource, "chosen">>();
`)
}
