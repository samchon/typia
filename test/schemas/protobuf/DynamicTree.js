//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function DynamicTree$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor,k,value
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.sequence=r.double()
  break
  }
  case 3: {
  if(m.children===util.emptyObject)
  m.children={}
  var c2 = r.uint32()+r.pos
  k=""
  value=null
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=types[2].decode(r,r.uint32())
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.children[k]=value
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("sequence"))
  throw util.ProtocolError("missing required 'sequence'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function DynamicTree$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(17).double(m.sequence)
  if(m.children!=null&&Object.hasOwnProperty.call(m,"children")){
  for(var ks=Object.keys(m.children),i=0;i<ks.length;++i){
  w.uint32(26).fork().uint32(10).string(ks[i])
  types[2].encode(m.children[ks[i]],w.uint32(18).fork()).ldelim().ldelim()
  }
  }
  return w
}