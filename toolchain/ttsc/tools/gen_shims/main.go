// Package main generates go:linkname-based shim.go files for every
// typescript-go internal package listed below.
//
// Adapted from tsgolint's tools/gen_shims/main.go
// (https://github.com/oxc-project/tsgolint, MIT License).
// Copyright (c) 2025 VoidZero Inc. & Contributors.
// Copyright (c) 2025 typescript-eslint and other contributors.
// Copyright (c) 2026 Jeongho Nam (ttsc adaptation — typia-specific packages
// list and extra_shim lookup path; generator algorithm unchanged).
//
// Usage:
//
//	cd packages/ttsc
//	go run ./tools/gen_shims
//
// Each shim directory (`packages/ttsc/shim/<name>`) must contain an
// `extra-shim.json` file; the generator writes its output to
// `packages/ttsc/shim/<name>/shim.go`.
package main

import (
	"bytes"
	"fmt"
	"go/types"
	"log"
	"maps"
	"os"
	"path"
	"slices"
	"strings"

	"github.com/go-json-experiment/json"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"golang.org/x/tools/go/packages"
)

const tsgoInternalPrefix = "github.com/microsoft/typescript-go/internal/"

// Packages for which we generate a shim. Mirrors tsgolint's list with
// project/lsp/lsproto removed (typia doesn't use them) and the rest kept
// verbatim so gen_shims output stays comparable across projects.
var packagesToShim = []string{
	"ast",
	"bundled",
	"checker",
	"compiler",
	"core",
	"parser",
	"scanner",
	"tsoptions",
	"tspath",
	"vfs",
	"vfs/cachedvfs",
	"vfs/osvfs",
}

type ExtraShim struct {
	ExtraFunctions  []string
	ExtraMethods    map[string][]string
	ExtraFields     map[string][]string
	IgnoreFunctions []string
}

func signatureHasUnexportedType(t types.Signature) bool {
	if params := t.Params(); params != nil {
		for v := range params.Variables() {
			ty := v.Type()
			if ptrType, ok := ty.(*types.Pointer); ok {
				ty = ptrType.Elem()
			}
			if named, ok := ty.(*types.Named); ok {
				if !named.Obj().Exported() {
					return true
				}
			}
		}
	}
	return false
}

func main() {
	fullNames := make([]string, len(packagesToShim))
	for i, pkg := range packagesToShim {
		fullNames[i] = tsgoInternalPrefix + pkg
	}

	loaded, err := packages.Load(&packages.Config{
		Dir:  "./shim/ast", // any shim module works as anchor; they all require typescript-go
		Mode: packages.LoadSyntax,
	}, fullNames...)
	if err != nil {
		log.Fatalf("gen_shims: packages.Load: %v", err)
	}

	var shimHeaderBuilder strings.Builder
	var shimBuilder strings.Builder
	var tempBuffer bytes.Buffer

	for _, pkg := range loaded {
		if len(pkg.Errors) != 0 {
			for _, e := range pkg.Errors {
				fmt.Fprintln(os.Stderr, "gen_shims:", e)
			}
			log.Fatalf("gen_shims: package %s failed to load (see errors above)", pkg.PkgPath)
		}
		shimDirPath := path.Join("./shim/", strings.TrimPrefix(pkg.PkgPath, tsgoInternalPrefix))

		var extraShim ExtraShim
		extraShimFilePath := path.Join(shimDirPath, "extra-shim.json")
		if data, err := os.ReadFile(extraShimFilePath); err == nil {
			if err := json.Unmarshal(data, &extraShim); err != nil {
				fmt.Fprintf(os.Stderr, "gen_shims: error parsing %v: %v\n", extraShimFilePath, err)
				os.Exit(1)
			}
		}
		if extraShim.ExtraMethods == nil {
			extraShim.ExtraMethods = map[string][]string{}
		}
		if extraShim.ExtraFunctions == nil {
			extraShim.ExtraFunctions = []string{}
		}
		if extraShim.ExtraFields == nil {
			extraShim.ExtraFields = map[string][]string{}
		}
		if extraShim.IgnoreFunctions == nil {
			extraShim.IgnoreFunctions = []string{}
		}

		importedPackages := map[string]bool{}
		importPackage := func(path string, directly bool) {
			if directly {
				importedPackages[path] = true
			} else if _, ok := importedPackages[path]; !ok {
				importedPackages[path] = false
			}
		}

		var qualifierOnlyPackageName types.Qualifier = func(p *types.Package) string {
			importPackage(p.Path(), true)
			return p.Name()
		}
		var qualifierEmptyPackageName types.Qualifier = func(p *types.Package) string { return "" }

		emitGoLinknameDirective := func(localName string, fn *types.Func) {
			importPackage("unsafe", false)
			importPackage(pkg.Types.Path(), false)
			shimBuilder.WriteString("//go:linkname ")
			shimBuilder.WriteString(localName)
			shimBuilder.WriteByte(' ')
			shimBuilder.WriteString(fn.Pkg().Path())
			shimBuilder.WriteByte('.')
			if recv := fn.Signature().Recv(); recv != nil {
				shimBuilder.WriteByte('(')
				shimBuilder.WriteString(types.TypeString(recv.Type(), qualifierEmptyPackageName))
				shimBuilder.WriteByte(')')
				shimBuilder.WriteByte('.')
			}
			shimBuilder.WriteString(fn.Name())
			shimBuilder.WriteByte('\n')
		}

		emitLinkedFunction := func(fn *types.Func) bool {
			if fn.Signature().TypeParams() != nil {
				return false
			}
			if signatureHasUnexportedType(*fn.Signature()) {
				fmt.Fprintf(os.Stderr, "gen_shims: skipping %s.%s (unexported types)\n", fn.Pkg().Name(), fn.Name())
				return false
			}
			name := cases.Title(language.English, cases.NoLower).String(fn.Name())
			emitGoLinknameDirective(name, fn)
			shimBuilder.WriteString("func ")
			shimBuilder.WriteString(name)
			types.WriteSignature(&tempBuffer, fn.Signature(), qualifierOnlyPackageName)
			shimBuilder.Write(tempBuffer.Bytes())
			tempBuffer.Reset()
			shimBuilder.WriteString("\n")
			return true
		}

		matchedExtraFunctions := make(map[string]bool, len(extraShim.ExtraFunctions))
		for _, name := range extraShim.ExtraFunctions {
			matchedExtraFunctions[name] = false
		}
		matchedExtraMethods := make(map[string]map[string]bool, len(extraShim.ExtraMethods))
		for name, methods := range extraShim.ExtraMethods {
			matchedExtraMethods[name] = make(map[string]bool, len(methods))
			for _, method := range methods {
				matchedExtraMethods[name][method] = false
			}
		}
		matchedExtraFields := make(map[string]bool, len(extraShim.ExtraFields))
		for name := range extraShim.ExtraFields {
			matchedExtraFields[name] = false
		}

		scope := pkg.Types.Scope()
		for _, name := range scope.Names() {
			object := scope.Lookup(name)
			if !object.Exported() {
				fn, isFunc := object.(*types.Func)
				if _, exists := matchedExtraFunctions[name]; isFunc && exists {
					if emitLinkedFunction(fn) {
						matchedExtraFunctions[name] = true
					}
				}
				continue
			}

			printReexport := func(kind string) {
				importPackage(pkg.Types.Path(), true)
				shimBuilder.WriteString(kind)
				shimBuilder.WriteString(" ")
				shimBuilder.WriteString(name)
				shimBuilder.WriteString(" = ")
				shimBuilder.WriteString(pkg.Name)
				shimBuilder.WriteString(".")
				shimBuilder.WriteString(name)
				shimBuilder.WriteString("\n")
			}

			switch object.(type) {
			case *types.TypeName:
				typeName := object.(*types.TypeName)
				t := typeName.Type()
				named, isNamed := t.(*types.Named)
				if isNamed {
					_, nameWithTypeParams, _ := strings.Cut(types.TypeString(named, qualifierOnlyPackageName), ".")
					importPackage(pkg.Types.Path(), true)
					shimBuilder.WriteString("type ")
					shimBuilder.WriteString(nameWithTypeParams)
					shimBuilder.WriteString(" = ")
					shimBuilder.WriteString(pkg.Name)
					shimBuilder.WriteString(".")
					shimBuilder.WriteString(name)

					typeParams := slices.Collect(named.TypeParams().TypeParams())
					if len(typeParams) > 0 {
						shimBuilder.WriteByte('[')
						for i, ty := range typeParams {
							if i > 0 {
								shimBuilder.WriteByte(',')
							}
							shimBuilder.WriteString(ty.String())
						}
						shimBuilder.WriteByte(']')
					}
					shimBuilder.WriteString("\n")
				} else {
					printReexport("type")
				}

				if extraMethods, ok := matchedExtraMethods[name]; isNamed && ok {
					for method := range named.Methods() {
						methodName := method.Name()
						if _, exists := extraMethods[methodName]; !exists {
							continue
						}
						extraMethods[methodName] = true
						prefix := name + "_"
						emitGoLinknameDirective(prefix+methodName, method)
						funcDeclStr := types.ObjectString(method, qualifierOnlyPackageName)
						recvStart := 0
						recvEnd := 0
						paramsStart := 0
						for i, s := range funcDeclStr {
							if s == '(' {
								if recvStart == 0 {
									recvStart = i + 1
								}
								if recvEnd != 0 {
									paramsStart = i + 1
									break
								}
							}
							if s == ')' && recvEnd == 0 {
								recvEnd = i
							}
						}
						shimBuilder.WriteString("func ")
						shimBuilder.WriteString(prefix)
						shimBuilder.WriteString(funcDeclStr[recvEnd+2 : paramsStart])
						shimBuilder.WriteString("recv ")
						shimBuilder.WriteString(funcDeclStr[recvStart:recvEnd])
						if method.Signature().Params() != nil {
							shimBuilder.WriteString(", ")
						}
						shimBuilder.WriteString(funcDeclStr[paramsStart:])
						shimBuilder.WriteString("\n")
					}
				}

				if _, ok := matchedExtraFields[name]; isNamed && ok {
					importPackage("unsafe", true)
					matchedExtraFields[name] = true
					mirrorStructName := "extra_" + name

					var emitExtraStruct func(name string, s *types.Struct)
					emitExtraStruct = func(name string, s *types.Struct) {
						shimBuilder.WriteString("type extra_")
						shimBuilder.WriteString(name)
						shimBuilder.WriteString(" struct {")

						dependencies := []struct {
							string
							*types.Struct
						}{}
						for field := range s.Fields() {
							shimBuilder.WriteString("\n  ")
							if !field.Embedded() {
								shimBuilder.WriteString(field.Name())
								shimBuilder.WriteByte(' ')
							}

							ptrType, ok := field.Type().(*types.Pointer)
							if ok {
								named, ok := ptrType.Elem().(*types.Named)
								if ok && !named.Obj().Exported() {
									strct, ok := named.Underlying().(*types.Struct)
									if ok {
										n := named.Obj().Name()
										dependencies = append(dependencies, struct {
											string
											*types.Struct
										}{n, strct})
										shimBuilder.WriteString("extra_")
										shimBuilder.WriteString(n)
										continue
									}
								}
							}

							shimBuilder.WriteString(
								strings.ReplaceAll(types.TypeString(field.Type(), qualifierOnlyPackageName), "checker.thisAssignmentDeclarationKind", "int32"),
							)
						}
						shimBuilder.WriteString("\n}\n")
						for _, dep := range dependencies {
							emitExtraStruct(dep.string, dep.Struct)
						}
					}

					strct, ok := named.Underlying().(*types.Struct)
					if !ok {
						log.Fatalf("gen_shims: expected %v to be struct", name)
					}
					emitExtraStruct(name, strct)

					mappedFieldTypes := make(map[string]*types.Var, strct.NumFields())
					for field := range strct.Fields() {
						mappedFieldTypes[field.Name()] = field
					}

					for _, field := range extraShim.ExtraFields[name] {
						shimBuilder.WriteString("func ")
						shimBuilder.WriteString(name)
						shimBuilder.WriteByte('_')
						shimBuilder.WriteString(field)
						shimBuilder.WriteString("(v *")
						shimBuilder.WriteString(pkg.Name)
						shimBuilder.WriteByte('.')
						shimBuilder.WriteString(name)
						shimBuilder.WriteString(") ")

						fieldVar, ok := mappedFieldTypes[field]
						if !ok {
							log.Fatalf("gen_shims: expected struct %q to contain field %q", name, field)
						}
						shimBuilder.WriteString(types.TypeString(fieldVar.Type(), qualifierOnlyPackageName))
						shimBuilder.WriteString(" {\n")
						shimBuilder.WriteString("  return ((*")
						shimBuilder.WriteString(mirrorStructName)
						shimBuilder.WriteString(")(unsafe.Pointer(v))).")
						shimBuilder.WriteString(field)
						shimBuilder.WriteString("\n")
						shimBuilder.WriteString("}\n")
					}
				}
			case *types.Const:
				printReexport("const")
			case *types.Var:
				printReexport("var")
			case *types.Func:
				if !slices.Contains(extraShim.IgnoreFunctions, name) {
					funcType := object.(*types.Func)
					emitLinkedFunction(funcType)
				}
			}
		}

		exit := false
		for fnName, found := range matchedExtraFunctions {
			if found {
				continue
			}
			fmt.Fprintf(os.Stderr, "gen_shims: ERROR couldn't find %v function\n", fnName)
			exit = true
		}
		for name, methods := range matchedExtraMethods {
			for methodName, found := range methods {
				if found {
					continue
				}
				fmt.Fprintf(os.Stderr, "gen_shims: ERROR couldn't find %v.%v method\n", name, methodName)
				exit = true
			}
		}
		if exit {
			os.Exit(1)
		}

		shimHeaderBuilder.WriteString("\n// Code generated by packages/ttsc/tools/gen_shims. DO NOT EDIT.\n\n")
		shimHeaderBuilder.WriteString("package ")
		shimHeaderBuilder.WriteString(pkg.Name)
		shimHeaderBuilder.WriteString("\n\n")
		importsList := slices.Collect(maps.Keys(importedPackages))
		slices.Sort(importsList)
		for _, imported := range importsList {
			shimHeaderBuilder.WriteString("import ")
			if !importedPackages[imported] {
				shimHeaderBuilder.WriteString("_ ")
			}
			shimHeaderBuilder.WriteString("\"")
			shimHeaderBuilder.WriteString(imported)
			shimHeaderBuilder.WriteString("\"\n")
		}
		shimHeaderBuilder.WriteString("\n")

		shimGoPath := path.Join(shimDirPath, "shim.go")
		file, err := os.Create(shimGoPath)
		if err != nil {
			log.Fatalf("gen_shims: opening %v for write: %v", shimGoPath, err)
		}
		file.WriteString(shimHeaderBuilder.String())
		file.WriteString(shimBuilder.String())
		if err := file.Close(); err != nil {
			log.Fatalf("gen_shims: closing %v: %v", shimGoPath, err)
		}
		fmt.Fprintf(os.Stdout, "gen_shims: wrote %s (%d bytes)\n", shimGoPath, len(shimBuilder.String()))

		shimHeaderBuilder.Reset()
		shimBuilder.Reset()
	}
}
