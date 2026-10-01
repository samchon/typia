/**
 * Declared fixture eligibility for the automated OpenAPI schema populations.
 *
 * Candidate discovery and specialized suite restrictions belong to the caller;
 * this namespace owns the shared metadata contract and its pure
 * interpretation.
 *
 * @evidence contracts/common.md#principled-implementation Loaded own fixture exports and their explicit Boolean flags establish eligibility independently of TypeScript source spelling. The schema equality override represents a distinct assertion population from native equality rather than inheriting source-scan accidents.
 * @evidence contracts/common.md#clear-and-simple-design The namespace groups the input and eligibility types with their one selector; its private ownFlag function enforces the same ownership rule for each flag. It has no filesystem, generator or native-host dependency.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Selection contains no named fixture exceptions, expected-output computation or foreign mutation. Suite-specific candidate restrictions are outside this operation and remain visible in the caller's acknowledgment, not certified by this namespace.
 * @evidence contracts/common.md#meaningful-documentation Namespace prose states the responsibility boundary; member comments explain defaults, override precedence and missing-export failure with property documentation beside each input field.
 */
export namespace TestStructureSelector {
  /**
   * The declared eligibility consumed by the automated OpenAPI schema matrix.
   *
   * Missing flags retain the default population. Schema equality can differ
   * from native equality because its surplus walker and producer differ.
   *
   * @evidence contracts/common.md#principled-implementation Optional Boolean flags represent explicit fixture decisions; SCHEMA_EQUALS overrides ADDABLE only for the schema equality population, so native equality eligibility does not silently remove independently valid schema assertions.
   * @evidence contracts/common.md#clear-and-simple-design Three optional flags describe JSON value compatibility and the two equality policies without source syntax, fixture names or callable behavior in the metadata.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Eligibility is data supplied by the fixture owner rather than an exception keyed by its name. The selector reads only own flags and never interprets comments, annotations or generated answers.
   * @evidence contracts/common.md#meaningful-documentation Native property comments explain each flag's consumer, default and override precedence; the type introduction states why the two equality policies may differ.
   */
  export interface IStructure {
    /** False excludes values without a faithful JSON representation. */
    JSONABLE?: boolean;

    /**
     * False excludes the native surplus scenario unless schema-specific
     * eligibility overrides it.
     */
    ADDABLE?: boolean;

    /**
     * Explicit eligibility for schema equality; otherwise ADDABLE supplies its
     * default.
     */
    SCHEMA_EQUALS?: boolean;
  }

  /**
   * Candidate source names and their already loaded fixture declarations.
   *
   * The caller owns any suite-specific candidate restriction. Selection does
   * not open source files or invoke fixture generators.
   *
   * @evidence contracts/common.md#principled-implementation Candidate filenames identify declaration keys, while loaded own declarations establish eligibility independently of their source spelling. The equals flag selects ordinary versus surplus-schema validation.
   * @evidence contracts/common.md#clear-and-simple-design The input separates candidate discovery, declaration binding and matrix choice; a readonly filename list prevents the selector from rewriting its caller's population.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No source-content callback or special fixture-name policy is present. The caller provides actual declarations, not expected selected output.
   * @evidence contracts/common.md#meaningful-documentation Property comments identify the candidate domain, declaration lookup and matrix switch; the type prose records the caller's discovery ownership and the non-execution of generators.
   */
  export interface IProps {
    /** Candidate TypeScript basenames, in the caller's discovery order. */
    files: readonly string[];

    /** Own exports keyed by the filename without its .ts extension. */
    declarations: Readonly<Record<string, IStructure>>;

    /** Whether to apply schema surplus-member eligibility. */
    equals: boolean;
  }

  /**
   * Selects fixture declarations from explicit metadata without reading source.
   *
   * An absent own export is an observable wiring error, while absent flags use
   * the fixture defaults. Inherited flags cannot decide a declared population.
   *
   * @evidence contracts/common.md#principled-implementation Each candidate .ts basename except the index barrel must bind an own declaration. Own JSONABLE false excludes both matrices; equality additionally uses a defined own SCHEMA_EQUALS value, otherwise own ADDABLE, and excludes only literal false. Results preserve candidate order.
   * @evidence contracts/common.md#clear-and-simple-design One loop handles file identity, export binding and eligibility; the private ownFlag helper shares the own-property rule across the three optional flags. Filesystem discovery and suite restrictions remain with the caller.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The operation has no source text, fixture-name exceptions or foreign mutations. Explicit schema-specific eligibility describes a different assertion population rather than compensating for source formatting; missing exports throw instead of silently losing coverage.
   * @evidence contracts/common.md#meaningful-documentation The declaration comment describes defaults, source independence and wiring failure; the input and eligibility types document their fields and precedence.
   */
  export const select = (props: IProps): string[] => {
    const result: string[] = [];
    for (const file of props.files) {
      if (!file.endsWith(".ts") || file === "index.ts") continue;
      const name = file.slice(0, -3);
      if (!Object.hasOwn(props.declarations, name))
        throw new Error(`@typia/template does not export ${name}`);
      const structure = props.declarations[name]!;
      if (ownFlag(structure, "JSONABLE") === false) continue;
      if (
        props.equals &&
        (ownFlag(structure, "SCHEMA_EQUALS") ??
          ownFlag(structure, "ADDABLE")) === false
      )
        continue;
      result.push(name);
    }
    return result;
  };

  const ownFlag = (
    structure: IStructure,
    key: keyof IStructure,
  ): boolean | undefined =>
    Object.hasOwn(structure, key) ? structure[key] : undefined;
}
