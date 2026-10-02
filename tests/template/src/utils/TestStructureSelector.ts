/**
 * Declared fixture eligibility for the automated OpenAPI schema populations.
 *
 * Candidate discovery and specialized suite restrictions belong to the caller;
 * this namespace owns the shared metadata contract and its pure
 * interpretation.
 */
export namespace TestStructureSelector {
  /**
   * The declared eligibility consumed by the automated OpenAPI schema matrix.
   *
   * Missing flags retain the default population. Schema equality can differ
   * from native equality because its surplus walker and producer differ.
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
