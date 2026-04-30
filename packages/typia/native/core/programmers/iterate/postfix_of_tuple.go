package iterate

func postfix_of_tuple(str string) string {
	if len(str) > 0 && str[len(str)-1] == '"' {
		return str[:len(str)-1]
	}
	return str + " + \""
}

func Postfix_of_tuple_export(str string) string {
	return postfix_of_tuple(str)
}
