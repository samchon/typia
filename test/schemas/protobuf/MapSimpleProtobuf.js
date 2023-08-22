//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function MapSimpleProtobuf$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor,k,value
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(m.boolean===util.emptyObject)
  m.boolean={}
  var c2 = r.uint32()+r.pos
  k=""
  value=false
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=r.bool()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.boolean[k]=value
  break
  }
  case 2: {
  if(m.int32===util.emptyObject)
  m.int32={}
  var c2 = r.uint32()+r.pos
  k=""
  value=0
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=r.int32()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.int32[k]=value
  break
  }
  case 3: {
  if(m.bigint===util.emptyObject)
  m.bigint={}
  var c2 = r.uint32()+r.pos
  k=""
  value=0
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=r.int64()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.bigint[k]=value
  break
  }
  case 4: {
  if(m.double===util.emptyObject)
  m.double={}
  var c2 = r.uint32()+r.pos
  k=""
  value=0
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=r.double()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.double[k]=value
  break
  }
  case 5: {
  if(m.string===util.emptyObject)
  m.string={}
  var c2 = r.uint32()+r.pos
  k=""
  value=""
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=r.string()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.string[k]=value
  break
  }
  case 6: {
  if(m.bytes===util.emptyObject)
  m.bytes={}
  var c2 = r.uint32()+r.pos
  k=""
  value=[]
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=r.bytes()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.bytes[k]=value
  break
  }
  case 7: {
  if(m.objects===util.emptyObject)
  m.objects={}
  var c2 = r.uint32()+r.pos
  k=""
  value=null
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.string(); break
  case 2:
  value=types[6].decode(r,r.uint32())
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.objects[k]=value
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
function MapSimpleProtobuf$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.boolean!=null&&Object.hasOwnProperty.call(m,"boolean")){
  for(var ks=Object.keys(m.boolean),i=0;i<ks.length;++i){
  w.uint32(10).fork().uint32(10).string(ks[i])
  .uint32(16).bool(m.boolean[ks[i]]).ldelim()
  }
  }
  if(m.int32!=null&&Object.hasOwnProperty.call(m,"int32")){
  for(var ks=Object.keys(m.int32),i=0;i<ks.length;++i){
  w.uint32(18).fork().uint32(10).string(ks[i])
  .uint32(16).int32(m.int32[ks[i]]).ldelim()
  }
  }
  if(m.bigint!=null&&Object.hasOwnProperty.call(m,"bigint")){
  for(var ks=Object.keys(m.bigint),i=0;i<ks.length;++i){
  w.uint32(26).fork().uint32(10).string(ks[i])
  .uint32(16).int64(m.bigint[ks[i]]).ldelim()
  }
  }
  if(m.double!=null&&Object.hasOwnProperty.call(m,"double")){
  for(var ks=Object.keys(m.double),i=0;i<ks.length;++i){
  w.uint32(34).fork().uint32(10).string(ks[i])
  .uint32(17).double(m.double[ks[i]]).ldelim()
  }
  }
  if(m.string!=null&&Object.hasOwnProperty.call(m,"string")){
  for(var ks=Object.keys(m.string),i=0;i<ks.length;++i){
  w.uint32(42).fork().uint32(10).string(ks[i])
  .uint32(18).string(m.string[ks[i]]).ldelim()
  }
  }
  if(m.bytes!=null&&Object.hasOwnProperty.call(m,"bytes")){
  for(var ks=Object.keys(m.bytes),i=0;i<ks.length;++i){
  w.uint32(50).fork().uint32(10).string(ks[i])
  .uint32(18).bytes(m.bytes[ks[i]]).ldelim()
  }
  }
  if(m.objects!=null&&Object.hasOwnProperty.call(m,"objects")){
  for(var ks=Object.keys(m.objects),i=0;i<ks.length;++i){
  w.uint32(58).fork().uint32(10).string(ks[i])
  types[6].encode(m.objects[ks[i]],w.uint32(18).fork()).ldelim().ldelim()
  }
  }
  return w
}