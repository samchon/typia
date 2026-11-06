const fs = require("node:fs");
const path = require("node:path");
const YAML = require("yaml");

/**
 * Selects a catalogued compiler for the next workspace installation.
 *
 * The YAML document API preserves comments and the ttsc family's shared anchor.
 * Installation remains a separate step so failures retain their own diagnostics.
 *
 * @evidence contracts/common.md#principled-implementation The named catalog supplies the compiler specifier, and the document API replaces only the default TypeScript catalog entry before pnpm resolves it.
 * @evidence contracts/common.md#clear-and-simple-design One operation owns catalog selection; pnpm retains dependency resolution and installation ownership.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Compiler versions come from workspace catalogs rather than duplicated literals or text replacement; an unknown catalog fails before writing.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the next-install effect, preserved YAML structure and separate installation boundary.
 */
function selectTypescript(catalog) {
  const file = path.resolve(__dirname, "../pnpm-workspace.yaml");
  const document = YAML.parseDocument(fs.readFileSync(file, "utf8"));
  if (document.errors.length) throw document.errors[0];
  const version = document.getIn(["catalogs", catalog, "typescript"]);
  if (typeof version !== "string" || !version.trim())
    throw new Error(`No TypeScript version in catalog ${catalog}`);
  document.setIn(["catalogs", "typescript", "typescript"], version);
  fs.writeFileSync(file, document.toString());
}

module.exports = { selectTypescript };

if (require.main === module) selectTypescript(process.argv[2]);
