package helpers

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type httpMetadataUtilNamespace struct{}

var HttpMetadataUtil = httpMetadataUtilNamespace{}

func (httpMetadataUtilNamespace) Atomics(metadata *nativemetadata.MetadataSchema) map[string]struct{} {
  output := map[string]struct{}{}
  for _, atomic := range metadata.Atomics {
    output[atomic.Type] = struct{}{}
  }
  for _, constant := range metadata.Constants {
    output[constant.Type] = struct{}{}
  }
  if len(metadata.Templates) != 0 {
    output["string"] = struct{}{}
  }
  return output
}

func (httpMetadataUtilNamespace) IsUnion(metadata *nativemetadata.MetadataSchema) bool {
  return len(HttpMetadataUtil.Atomics(metadata))+
    len(metadata.Arrays)+
    len(metadata.Tuples)+
    len(metadata.Natives)+
    len(metadata.Maps)+
    len(metadata.Objects) > 1
}
