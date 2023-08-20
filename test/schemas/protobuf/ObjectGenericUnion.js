//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ObjectGenericUnion$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.v1=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.v2=types[1].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function ISaleQuestion$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.writer=r.string()
  break
  }
  case 2: {
  m.answer=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.id=r.string()
  break
  }
  case 4: {
  m.hit=r.double()
  break
  }
  case 5: {
  if(!(m.contents&&m.contents.length))
  m.contents=[]
  m.contents.push(types[4].decode(r,r.uint32()))
  break
  }
  case 6: {
  m.createdAt=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("writer"))
  throw util.ProtocolError("missing required 'writer'",{instance:m})
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("hit"))
  throw util.ProtocolError("missing required 'hit'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function ISaleAnswer$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.hit=r.double()
  break
  }
  case 3: {
  if(!(m.contents&&m.contents.length))
  m.contents=[]
  m.contents.push(types[2].decode(r,r.uint32()))
  break
  }
  case 4: {
  m.createdAt=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("hit"))
  throw util.ProtocolError("missing required 'hit'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function ISaleArticle$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function IContent$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.createdAt=r.string()
  break
  }
  case 3: {
  m.title=r.string()
  break
  }
  case 4: {
  m.body=r.string()
  break
  }
  case 5: {
  if(!(m.files&&m.files.length))
  m.files=[]
  m.files.push(types[4].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  if(!m.hasOwnProperty("title"))
  throw util.ProtocolError("missing required 'title'",{instance:m})
  if(!m.hasOwnProperty("body"))
  throw util.ProtocolError("missing required 'body'",{instance:m})
  return m
}
function ISaleReview$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.writer=r.string()
  break
  }
  case 2: {
  m.answer=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.id=r.string()
  break
  }
  case 4: {
  m.hit=r.double()
  break
  }
  case 5: {
  if(!(m.contents&&m.contents.length))
  m.contents=[]
  m.contents.push(types[4].decode(r,r.uint32()))
  break
  }
  case 6: {
  m.createdAt=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("writer"))
  throw util.ProtocolError("missing required 'writer'",{instance:m})
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("hit"))
  throw util.ProtocolError("missing required 'hit'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function IContent$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.createdAt=r.string()
  break
  }
  case 3: {
  m.title=r.string()
  break
  }
  case 4: {
  m.body=r.string()
  break
  }
  case 5: {
  if(!(m.files&&m.files.length))
  m.files=[]
  m.files.push(types[4].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  if(!m.hasOwnProperty("title"))
  throw util.ProtocolError("missing required 'title'",{instance:m})
  if(!m.hasOwnProperty("body"))
  throw util.ProtocolError("missing required 'body'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ObjectGenericUnion$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.v1!=null&&Object.hasOwnProperty.call(m,"v1"))
  types[0].encode(m.v1,w.uint32(10).fork()).ldelim()
  if(m.v2!=null&&Object.hasOwnProperty.call(m,"v2"))
  types[1].encode(m.v2,w.uint32(18).fork()).ldelim()
  return w
}
function ISaleQuestion$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.writer)
  if(m.answer!=null&&Object.hasOwnProperty.call(m,"answer"))
  types[1].encode(m.answer,w.uint32(18).fork()).ldelim()
  w.uint32(26).string(m.id)
  w.uint32(33).double(m.hit)
  if(m.contents!=null&&m.contents.length){
  for(var i=0;i<m.contents.length;++i)
  types[4].encode(m.contents[i],w.uint32(42).fork()).ldelim()
  }
  w.uint32(50).string(m.createdAt)
  return w
}
function ISaleAnswer$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(17).double(m.hit)
  if(m.contents!=null&&m.contents.length){
  for(var i=0;i<m.contents.length;++i)
  types[2].encode(m.contents[i],w.uint32(26).fork()).ldelim()
  }
  w.uint32(34).string(m.createdAt)
  return w
}
function ISaleArticle$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function IContent$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(18).string(m.createdAt)
  w.uint32(26).string(m.title)
  w.uint32(34).string(m.body)
  if(m.files!=null&&m.files.length){
  for(var i=0;i<m.files.length;++i)
  types[4].encode(m.files[i],w.uint32(42).fork()).ldelim()
  }
  return w
}
function ISaleReview$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.writer)
  if(m.answer!=null&&Object.hasOwnProperty.call(m,"answer"))
  types[1].encode(m.answer,w.uint32(18).fork()).ldelim()
  w.uint32(26).string(m.id)
  w.uint32(33).double(m.hit)
  if(m.contents!=null&&m.contents.length){
  for(var i=0;i<m.contents.length;++i)
  types[4].encode(m.contents[i],w.uint32(42).fork()).ldelim()
  }
  w.uint32(50).string(m.createdAt)
  return w
}
function IContent$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(18).string(m.createdAt)
  w.uint32(26).string(m.title)
  w.uint32(34).string(m.body)
  if(m.files!=null&&m.files.length){
  for(var i=0;i<m.files.length;++i)
  types[4].encode(m.files[i],w.uint32(42).fork()).ldelim()
  }
  return w
}