//go:build typia_native_internal
// +build typia_native_internal

package adapter

import (
	"path/filepath"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimcore "github.com/microsoft/typescript-go/shim/core"
	shimparser "github.com/microsoft/typescript-go/shim/parser"
	shimtsoptions "github.com/microsoft/typescript-go/shim/tsoptions"
	shimtspath "github.com/microsoft/typescript-go/shim/tspath"
	"github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestCommonJSImportSubstitutionMatrix covers CommonJS import substitution rules.
//
// CommonJS emit rewrites ES imports into generated module aliases. The adapter
// must mirror those aliases so printer output points at `module_1.member`
// expressions instead of stale imported identifiers.
//
// 1. Verify nil and non-source-file guards return no substitutions.
// 2. Parse default, named, aliased, type-only, and duplicated imports.
// 3. Assert runtime imports receive deterministic CommonJS aliases.
// 4. Assert module-name sanitizing handles empty, dotted, and numeric names.
func TestCommonJSImportSubstitutionMatrix(t *testing.T) {
	program := &driver.Program{
		ParsedConfig: shimtsoptions.NewParsedCommandLine(
			&shimcore.CompilerOptions{Module: 1},
			nil,
			shimtspath.ComparePathsOptions{},
		),
	}
	if substitutions := identifierSubstitutionsForEmit(nil, nil); substitutions != nil {
		t.Fatalf("nil program should not create substitutions: %#v", substitutions)
	}
	if substitutions := identifierSubstitutionsForEmit(program, "not-a-source-file"); substitutions != nil {
		t.Fatalf("non-source-file input should not create substitutions: %#v", substitutions)
	}
	if substitutions := commonJSImportIdentifierSubstitutions(nil); substitutions != nil {
		t.Fatalf("nil source file should not create substitutions: %#v", substitutions)
	}

	file := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.Join(t.TempDir(), "imports.ts")},
		`import Foo, { named, original as renamed, type TypeOnly } from "@scope/foo-bar";
import Second from "@scope/foo-bar";
import type { OnlyType } from "types";
import { value as dotValue } from ".";
const local = named;
`,
		shimcore.ScriptKindTS,
	)
	if file == nil {
		t.Fatal("source file parse failed")
	}
	file.Statements.Nodes = append([]*shimast.Node{
		nil,
		shimast.NewNodeFactory(shimast.NodeFactoryHooks{}).NewImportDeclaration(nil, nil, shimast.NewNodeFactory(shimast.NodeFactoryHooks{}).NewIdentifier("notString"), nil),
	}, file.Statements.Nodes...)
	for _, stmt := range file.Statements.Nodes {
		if stmt == nil || stmt.Kind != shimast.KindImportDeclaration {
			continue
		}
		decl := stmt.AsImportDeclaration()
		if decl == nil || decl.ImportClause == nil {
			continue
		}
		clause := decl.ImportClause.AsImportClause()
		if clause == nil || clause.NamedBindings == nil || clause.NamedBindings.Kind != shimast.KindNamedImports {
			continue
		}
		named := clause.NamedBindings.AsNamedImports()
		if named == nil || named.Elements == nil {
			continue
		}
		named.Elements.Nodes = append([]*shimast.Node{
			nil,
			shimast.NewNodeFactory(shimast.NodeFactoryHooks{}).NewImportSpecifier(false, nil, nil),
		}, named.Elements.Nodes...)
		break
	}
	substitutions := identifierSubstitutionsForEmit(program, file)
	expected := map[string]string{
		"Foo":      "foo_bar_1.default",
		"named":    "foo_bar_1.named",
		"renamed":  "foo_bar_1.original",
		"Second":   "foo_bar_2.default",
		"dotValue": "mod_1.value",
	}
	for key, value := range expected {
		if substitutions[key] != value {
			t.Fatalf("substitution %s mismatch: %q", key, substitutions[key])
		}
	}
	if _, ok := substitutions["TypeOnly"]; ok {
		t.Fatal("type-only named import should not be substituted")
	}
	if _, ok := substitutions["OnlyType"]; ok {
		t.Fatal("type-only import clause should not be substituted")
	}
	namedNil := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.Join(t.TempDir(), "named-nil.ts")},
		`import { value } from "named-nil";`,
		shimcore.ScriptKindTS,
	)
	namedNilImport := namedNil.Statements.Nodes[0].AsImportDeclaration().ImportClause.AsImportClause().NamedBindings.AsNamedImports()
	namedNilImport.Elements = nil
	if substitutions := commonJSImportIdentifierSubstitutions(namedNil); substitutions != nil {
		t.Fatalf("named import without elements should not create substitutions: %#v", substitutions)
	}
	empty := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.Join(t.TempDir(), "empty.ts")},
		`const local = 1;`,
		shimcore.ScriptKindTS,
	)
	if substitutions := commonJSImportIdentifierSubstitutions(empty); substitutions != nil {
		t.Fatalf("source without runtime imports should not create substitutions: %#v", substitutions)
	}
	if commonJSImportAliasBase("") != "mod" ||
		commonJSImportAliasBase("../123-name.ts") != "_123_name" ||
		commonJSImportAliasBase("../$value.ts") != "$value" {
		t.Fatal("CommonJS alias base sanitizing returned unexpected names")
	}
}
