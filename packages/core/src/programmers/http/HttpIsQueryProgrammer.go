package http

var HttpIsQueryProgrammer = httpIsQueryProgrammerNamespace{}

type httpIsQueryProgrammerNamespace struct{}

func (httpIsQueryProgrammerNamespace) Write(typeText string) string {
	return httpIsWrap(httpDecodeQueryFunction(), typeText)
}
