package iterate

func postfix_of_tuple(str string) string {
  if len(str) > 0 && str[len(str)-1] == '"' {
    return str[:len(str)-1]
  }
  return str + " + \""
}

// Postfix_of_tuple_export turns a path postfix into the prefix of a tuple
// element's path: it drops the closing quote when there is one and otherwise
// appends ` + "` so the index can be added.
//
// @evidence contracts/common.md#principled-implementation It turns a path postfix into the prefix of a tuple element's path: it drops the closing quote when there is one and otherwise appends ` + "` so the index can be added.
// @evidence contracts/common.md#clear-and-simple-design A one-line exported wrapper over the package-private function.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The wrapper has no logic of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Postfix_of_tuple_export(str string) string {
  return postfix_of_tuple(str)
}
