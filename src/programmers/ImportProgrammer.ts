import ts from "typescript";

import { MapUtil } from "../utils/MapUtil";

export class ImportProgrammer {
  private readonly assets_: Map<string, IAsset> = new Map();

  public namespace(props: { file: string; name: string }): ts.Identifier {
    const asset: IAsset = this.take(props.file);
    asset.namespace ??= alias(props.name);
    return ts.factory.createIdentifier(asset.namespace);
  }

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
                ts.factory.createIdentifier(asset.namespace),
              ),
            ),
            ts.factory.createStringLiteral(asset.file),
          ),
        );
      if (asset.default !== null || asset.instances.size > 0)
        statements.push(
          ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
              false,
              asset.default !== null
                ? ts.factory.createIdentifier(asset.default)
                : undefined,
              asset.instances.size > 0
                ? ts.factory.createNamedImports(
                    [...asset.instances].map((name) =>
                      ts.factory.createImportSpecifier(
                        false,
                        undefined,
                        ts.factory.createIdentifier(alias(name)),
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

  /**
   * @internal
   */
  public internal(name: string): ts.PropertyAccessExpression {
    if (name.startsWith("$") === false) name = `$${name}`;
    return ts.factory.createPropertyAccessExpression(
      this.namespace({
        file: `typia/lib/internal/${name}`,
        name: alias(name),
      }),
      name,
    );
  }

  /**
   * @internal
   */
  private take(file: string): IAsset {
    return MapUtil.take(this.assets_, file, () => ({
      file,
      default: null,
      namespace: null,
      instances: new Set(),
    }));
  }
}

interface IAsset {
  file: string;
  default: string | null;
  namespace: string | null;
  instances: Set<string>;
}

const alias = (str: string) => `__${str}`;
