//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ObjectGenericArray$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.pagination=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  if(!(m.data&&m.data.length))
  m.data=[]
  m.data.push(types[1].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("pagination"))
  throw util.ProtocolError("missing required 'pagination'",{instance:m})
  return m
}
function IPagination$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.page=r.double()
  break
  }
  case 2: {
  m.limit=r.double()
  break
  }
  case 3: {
  m.totalCount=r.double()
  break
  }
  case 4: {
  m.totalPages=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("page"))
  throw util.ProtocolError("missing required 'page'",{instance:m})
  if(!m.hasOwnProperty("limit"))
  throw util.ProtocolError("missing required 'limit'",{instance:m})
  if(!m.hasOwnProperty("totalCount"))
  throw util.ProtocolError("missing required 'totalCount'",{instance:m})
  if(!m.hasOwnProperty("totalPages"))
  throw util.ProtocolError("missing required 'totalPages'",{instance:m})
  return m
}
function IPerson$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.name=r.string()
  break
  }
  case 2: {
  m.age=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("age"))
  throw util.ProtocolError("missing required 'age'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ObjectGenericArray$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.pagination,w.uint32(10).fork()).ldelim()
  if(m.data!=null&&m.data.length){
  for(var i=0;i<m.data.length;++i)
  types[1].encode(m.data[i],w.uint32(18).fork()).ldelim()
  }
  return w
}
function IPagination$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.page)
  w.uint32(17).double(m.limit)
  w.uint32(25).double(m.totalCount)
  w.uint32(33).double(m.totalPages)
  return w
}
function IPerson$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.name)
  w.uint32(17).double(m.age)
  return w
}