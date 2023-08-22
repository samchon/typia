//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ArraySimpleProtobuf$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.boolean&&m.boolean.length))
  m.boolean=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.boolean.push(r.bool())
  }else
  m.boolean.push(r.bool())
  break
  }
  case 2: {
  if(!(m.int32&&m.int32.length))
  m.int32=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.int32.push(r.int32())
  }else
  m.int32.push(r.int32())
  break
  }
  case 3: {
  if(!(m.uint32&&m.uint32.length))
  m.uint32=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.uint32.push(r.uint32())
  }else
  m.uint32.push(r.uint32())
  break
  }
  case 4: {
  if(!(m.int64&&m.int64.length))
  m.int64=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.int64.push(r.int64())
  }else
  m.int64.push(r.int64())
  break
  }
  case 5: {
  if(!(m.uint64&&m.uint64.length))
  m.uint64=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.uint64.push(r.uint64())
  }else
  m.uint64.push(r.uint64())
  break
  }
  case 6: {
  if(!(m.float&&m.float.length))
  m.float=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.float.push(r.float())
  }else
  m.float.push(r.float())
  break
  }
  case 7: {
  if(!(m.double&&m.double.length))
  m.double=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.double.push(r.double())
  }else
  m.double.push(r.double())
  break
  }
  case 8: {
  if(!(m.string&&m.string.length))
  m.string=[]
  m.string.push(r.string())
  break
  }
  case 9: {
  if(!(m.bytes&&m.bytes.length))
  m.bytes=[]
  m.bytes.push(r.bytes())
  break
  }
  case 10: {
  if(!(m.object&&m.object.length))
  m.object=[]
  m.object.push(types[9].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ArraySimpleProtobuf$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.boolean!=null&&m.boolean.length){
  w.uint32(10).fork()
  for(var i=0;i<m.boolean.length;++i)
  w.bool(m.boolean[i])
  w.ldelim()
  }
  if(m.int32!=null&&m.int32.length){
  w.uint32(18).fork()
  for(var i=0;i<m.int32.length;++i)
  w.int32(m.int32[i])
  w.ldelim()
  }
  if(m.uint32!=null&&m.uint32.length){
  w.uint32(26).fork()
  for(var i=0;i<m.uint32.length;++i)
  w.uint32(m.uint32[i])
  w.ldelim()
  }
  if(m.int64!=null&&m.int64.length){
  w.uint32(34).fork()
  for(var i=0;i<m.int64.length;++i)
  w.int64(m.int64[i])
  w.ldelim()
  }
  if(m.uint64!=null&&m.uint64.length){
  w.uint32(42).fork()
  for(var i=0;i<m.uint64.length;++i)
  w.uint64(m.uint64[i])
  w.ldelim()
  }
  if(m.float!=null&&m.float.length){
  w.uint32(50).fork()
  for(var i=0;i<m.float.length;++i)
  w.float(m.float[i])
  w.ldelim()
  }
  if(m.double!=null&&m.double.length){
  w.uint32(58).fork()
  for(var i=0;i<m.double.length;++i)
  w.double(m.double[i])
  w.ldelim()
  }
  if(m.string!=null&&m.string.length){
  for(var i=0;i<m.string.length;++i)
  w.uint32(66).string(m.string[i])
  }
  if(m.bytes!=null&&m.bytes.length){
  for(var i=0;i<m.bytes.length;++i)
  w.uint32(74).bytes(m.bytes[i])
  }
  if(m.object!=null&&m.object.length){
  for(var i=0;i<m.object.length;++i)
  types[9].encode(m.object[i],w.uint32(82).fork()).ldelim()
  }
  return w
}