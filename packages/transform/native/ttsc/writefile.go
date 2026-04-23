package ttsc

import shimcompiler "github.com/microsoft/typescript-go/shim/compiler"

func WriteFileWithCleanup(
	next func(fileName string, text string) error,
) shimcompiler.WriteFile {
	return func(fileName, text string, _ *shimcompiler.WriteFileData) error {
		return next(fileName, CleanupTransformedText(text))
	}
}
