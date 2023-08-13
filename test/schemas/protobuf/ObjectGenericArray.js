//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
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

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
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