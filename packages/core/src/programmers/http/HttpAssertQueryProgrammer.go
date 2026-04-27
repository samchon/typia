package http

var HttpAssertQueryProgrammer = httpAssertQueryProgrammerNamespace{}

type httpAssertQueryProgrammerNamespace struct{}

func (httpAssertQueryProgrammerNamespace) Write(typeText string) string {
	return httpAssertWrap("http.assertQuery", httpDecodeQueryFunction(), typeText)
}
