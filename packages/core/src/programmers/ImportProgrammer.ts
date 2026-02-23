import { MapUtil } from "@typia/utils";
import ts from "typescript";

<<<<<<< HEAD
=======
/**
 * Import statement manager for code generation.
 *
 * Collects and deduplicates import declarations needed by generated code.
 * Tracks default imports ({@link default}), named imports ({@link instance}), and
 * namespace imports ({@link namespace}). Call {@link toStatements} to emit the
 * final import declaration AST nodes.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export class ImportProgrammer {
  private readonly assets_: Map<string, IAsset> = new Map();
  private readonly options_: Readonly<ImportProgrammer.IOptions>;

  public constructor(options?: Partial<ImportProgrammer.IOptions>) {
    this.options_ = {
      internalPrefix: options?.internalPrefix ?? "",
      runtime: options?.runtime,
    };
  }

  /* -----------------------------------------------------------
    ENROLLMENTS
  ----------------------------------------------------------- */
  public default(props: ImportProgrammer.IDefault): ts.Identifier {
    const asset: IAsset = this.take(props.file);
    asset.default ??= props;
    asset.default.type ||= props.type;
    return ts.factory.createIdentifier(asset.default.name);
  }

  public instance(props: ImportProgrammer.IInstance): ts.Identifier {
    const alias: string = props.alias ?? props.name;
    const asset: IAsset = this.take(props.file);
    MapUtil.take(asset.instances, alias, () => props);
    return ts.factory.createIdentifier(alias);
  }

  public namespace(props: ImportProgrammer.INamespace): ts.Identifier {
    const asset: IAsset = this.take(props.file);
    asset.namespace ??= props;
    return ts.factory.createIdentifier(asset.namespace.name);
  }

  public type(props: {
    file: string;
    name: string | ts.EntityName;
    arguments?: ts.TypeNode[];
  }): ts.ImportTypeNode {
    return ts.factory.createImportTypeNode(
      ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(props.file),
      ),
      undefined,
      typeof props.name === "string"
        ? ts.factory.createIdentifier(props.name)
        : props.name,
      props.arguments,
    );
  }

  /** @internal */
  public internal(name: string): ts.PropertyAccessExpression {
    if (name.startsWith("_") === false) name = `_${name}`;
    return ts.factory.createPropertyAccessExpression(
      this.namespace({
<<<<<<< HEAD
        file: __filename.endsWith(".ts")
          ? `typia/src/internal/${name}.ts`
          : `typia/lib/internal/${name}.js`,
=======
        file:
          __filename.endsWith(".ts") && this.options_.runtime !== "js"
            ? `typia/src/internal/${name}.ts`
            : `typia/lib/internal/${name}.js`,
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
        name: this.alias(name),
      }),
      name,
    );
  }

  /** @internal */
  public getInternalText(name: string): string {
    if (name.startsWith("_") === false) name = `_${name}`;
    const asset: IAsset | undefined = this.take(
<<<<<<< HEAD
      __filename.endsWith(".ts")
=======
      __filename.endsWith(".ts") && this.options_.runtime !== "js"
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
        ? `typia/src/internal/${name}.ts`
        : `typia/lib/internal/${name}.js`,
    );
    if (!asset?.namespace) throw new Error(`Internal asset not found: ${name}`);
    return `${asset.namespace.name}.${name}`;
  }

  /** @internal */
  private take(file: string): IAsset {
    return MapUtil.take(this.assets_, file, () => ({
      file,
      default: null,
      namespace: null,
      instances: new Map(),
    }));
  }

  private alias(name: string): string {
    return `__${this.options_.internalPrefix}${name}`;
  }

  /* -----------------------------------------------------------
    PROGRAM STATEMENTS
  ----------------------------------------------------------- */
  public toStatements(): ts.ImportDeclaration[] {
    const statements: ts.ImportDeclaration[] = [];
    for (const asset of this.assets_.values()) {
      if (asset.namespace !== null)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              false,
              undefined,
              ts.factory.createNamespaceImport(
                ts.factory.createIdentifier(asset.namespace.name),
              ),
            ),
            ts.factory.createStringLiteral(asset.file),
          ),
        );
      if (asset.default !== null)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              asset.default.type,
              ts.factory.createIdentifier(asset.default.name),
              undefined,
            ),
            ts.factory.createStringLiteral(asset.file),
          ),
        );
      if (asset.instances.size > 0)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              false,
              undefined,
              asset.instances.size > 0
                ? ts.factory.createNamedImports(
                    [...asset.instances.values()].map((ins) =>
                      ts.factory.createImportSpecifier(
                        false,
                        ins.alias || ins.alias === ins.name
                          ? ts.factory.createIdentifier(ins.name)
                          : undefined,
                        ts.factory.createIdentifier(ins.alias ?? ins.name),
                      ),
                    ),
                  )
                : undefined,
            ),
            ts.factory.createStringLiteral(asset.file),
            undefined,
          ),
        );
    }
    return statements;
  }
}

export namespace ImportProgrammer {
  export interface IOptions {
    internalPrefix: string;
    runtime?: "ts" | "js";
  }

  export interface IDefault {
    file: string;
    name: string;
    type: boolean;
  }
  export interface IInstance {
    file: string;
    name: string;
    alias: string | null;
  }
  export interface INamespace {
    file: string;
    name: string;
  }
}

interface IAsset {
  file: string;
  default: ImportProgrammer.IDefault | null;
  namespace: ImportProgrammer.INamespace | null;
  instances: Map<string, ImportProgrammer.IInstance>;
}
