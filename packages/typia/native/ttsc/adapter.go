package ttsc

import (
	"fmt"
	"os"
	"regexp"
	"runtime/debug"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
	"github.com/samchon/ttsc/packages/ttsc/driver"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

type PluginOptions struct {
	Functional bool
	Numeric    bool
	Finite     bool
	Undefined  bool
}

func (p PluginOptions) TransformOptions() nativecontext.ITransformOptions {
	return nativecontext.ITransformOptions{
		Finite:     boolPointer(p.Finite),
		Numeric:    boolPointer(p.Numeric),
		Functional: boolPointer(p.Functional),
		Undefined:  boolPointer(p.Undefined),
		Runtime:    "typia",
	}
}

func boolPointer(value bool) *bool {
	if value == false {
		return nil
	}
	return &value
}

func EmitCallWithOptions(program *driver.Program, site CallSite, plugin PluginOptions) (text string, handled bool, err error) {
	return emitCallWithOptions(program, site, plugin, false)
}

func EmitCallWithOptionsPreservingTypes(program *driver.Program, site CallSite, plugin PluginOptions) (text string, handled bool, err error) {
	return emitCallWithOptions(program, site, plugin, true)
}

func emitCallWithOptions(program *driver.Program, site CallSite, plugin PluginOptions, preserveTypes bool) (text string, handled bool, err error) {
	if program == nil || program.Checker == nil || site.Call == nil {
		return "", false, nil
	}
	importer := nativeprogrammers.NewImportProgrammer(nativeprogrammers.ImportProgrammer_IOptions{
		InternalPrefix: "typia_transform_",
		Runtime:        "typia",
	})
	context := nativecontext.ITypiaContext{
		Program:         program,
		CompilerOptions: program.ParsedConfig.ParsedConfig.CompilerOptions,
		Checker:         program.Checker,
		Options:         plugin.TransformOptions(),
		Importer:        importer,
	}
	defer func() {
		if exp := recover(); exp != nil {
			if e, ok := exp.(*nativetransform.TransformerError); ok {
				text = ""
				handled = true
				err = e
				return
			}
			text = ""
			handled = true
			if os.Getenv("TYPIA_NATIVE_DEBUG_STACK") != "" {
				err = fmt.Errorf("%v\n%s", exp, debug.Stack())
			} else {
				err = fmt.Errorf("%v", exp)
			}
		}
	}()
	node := nativetransform.CallExpressionTransformer.Transform(nativetransform.CallExpressionTransformer_TransformProps{
		Context:    context,
		Expression: site.Call,
	})
	if node == nil || node == site.Call.AsNode() {
		return "", false, nil
	}
	if preserveTypes {
		return cleanupPrintedExpression(shimprinter.EmitPreservingTypesWithIdentifierSubstitutions(
			node,
			site.File,
			nil,
		)), true, nil
	}
	return cleanupPrintedExpression(shimprinter.EmitWithIdentifierSubstitutions(
		node,
		site.File,
		identifierSubstitutionsForEmit(program, site.File),
	)), true, nil
}

func identifierSubstitutionsForEmit(program *driver.Program, file any) map[string]string {
	if program == nil ||
		program.ParsedConfig == nil ||
		program.ParsedConfig.ParsedConfig == nil ||
		program.ParsedConfig.ParsedConfig.CompilerOptions == nil ||
		program.ParsedConfig.ParsedConfig.CompilerOptions.GetEmitModuleKind().String() != "CommonJS" {
		return nil
	}
	sourceFile, ok := file.(*shimast.SourceFile)
	if ok == false {
		return nil
	}
	return commonJSImportIdentifierSubstitutions(sourceFile)
}

func cleanupPrintedExpression(text string) string {
	text = strings.TrimSpace(text)
	text = strings.TrimSuffix(text, ";")
	text = parenthesizeSingleParameterArrows(text)
	if strings.HasPrefix(text, "(") && strings.HasSuffix(text, ")") {
		return text
	}
	if strings.Contains(text, "=>") || strings.Contains(text, "function") {
		return "(" + text + ")"
	}
	return text
}

var singleParameterArrowPattern = regexp.MustCompile(`(^|[\s(=,:?])([A-Za-z_$][A-Za-z0-9_$]*) =>`)

func parenthesizeSingleParameterArrows(text string) string {
	return singleParameterArrowPattern.ReplaceAllString(text, `${1}(${2}) =>`)
}

func UnsupportedReason(site CallSite) string {
	if site.Call == nil {
		return "invalid call expression"
	}
	if site.Call.TypeArguments == nil || len(site.Call.TypeArguments.Nodes) == 0 {
		switch site.Module {
		case "module":
			switch site.Method {
			case "assert", "assertEquals", "assertGuard", "assertGuardEquals", "assertType", "equals", "is", "validate", "validateEquals":
				return ""
			}
		case "json":
			switch site.Method {
			case "stringify", "assertStringify", "isStringify", "validateStringify":
				return ""
			}
		}
		return "generic argument is not specified."
	}
	return ""
}

func FormatTransformError(site CallSite, err error) string {
	if err == nil {
		return ""
	}
	code := "typia." + site.Method
	if site.Module != "" {
		code = "typia." + site.Module + "." + site.Method
	}
	return fmt.Sprintf("error TS(%s): %s", code, err.Error())
}
