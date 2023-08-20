//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ObjectPrimitive$decode(r,l){
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
function IArticle$decode(r,l){
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
  m.extension=r.string()
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
  case 6: {
  m.secret=r.bool()
  break
  }
  case 7: {
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
  if(!m.hasOwnProperty("extension"))
  throw util.ProtocolError("missing required 'extension'",{instance:m})
  if(!m.hasOwnProperty("title"))
  throw util.ProtocolError("missing required 'title'",{instance:m})
  if(!m.hasOwnProperty("body"))
  throw util.ProtocolError("missing required 'body'",{instance:m})
  if(!m.hasOwnProperty("secret"))
  throw util.ProtocolError("missing required 'secret'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function IFile$decode(r,l){
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
  m.name=r.string()
  break
  }
  case 3: {
  m.extension=r.string()
  break
  }
  case 4: {
  m.url=r.string()
  break
  }
  case 5: {
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
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("extension"))
  throw util.ProtocolError("missing required 'extension'",{instance:m})
  if(!m.hasOwnProperty("url"))
  throw util.ProtocolError("missing required 'url'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ObjectPrimitive$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function IArticle$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(18).string(m.extension)
  w.uint32(26).string(m.title)
  w.uint32(34).string(m.body)
  if(m.files!=null&&m.files.length){
  for(var i=0;i<m.files.length;++i)
  types[4].encode(m.files[i],w.uint32(42).fork()).ldelim()
  }
  w.uint32(48).bool(m.secret)
  w.uint32(58).string(m.createdAt)
  return w
}
function IFile$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(18).string(m.name)
  w.uint32(26).string(m.extension)
  w.uint32(34).string(m.url)
  w.uint32(42).string(m.createdAt)
  return w
}