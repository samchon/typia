package helpers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type IExpressionEntry struct {
  Input      *shimast.Node
  Key        *nativemetadata.MetadataSchema
  Meta       *nativemetadata.MetadataSchema
  Expression *shimast.Node
}
