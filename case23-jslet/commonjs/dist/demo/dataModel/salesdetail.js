!function(e){function t(i){if(l[i])return l[i].exports;var a=l[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var l={};return t.m=e,t.c=l,t.p="",t(0)}({0:function(e,t,l){e.exports=l(20)},20:function(e,t){var l={},i=jslet.data.createEnumDataset("dsPaymentTerm",{"01":"M/T","02":"T/T"}),a=jslet.data.createEnumDataset("dsCustomer",{"01":"ABC","02":"Oil Group LTD","03":"Mail Group LTD"}),r=l.dsSaleMaster=new jslet.data.Dataset("dsSaleMaster"),n=jslet.data.createStringField("saleid",8);n.label("Sales ID"),r.addField(n),n=jslet.data.createDateField("saledate"),n.displayFormat("yyyy-MM-dd"),n.label("Sales Date"),r.addField(n),n=jslet.data.createStringField("customer",20),n.label("Customer");var s=new jslet.data.FieldLookup;s.dataset(a),n.lookup(s),r.addField(n),n=jslet.data.createStringField("paymentterm",10),n.label("Payment Term"),s=new jslet.data.FieldLookup,s.dataset(i),n.lookup(s),r.addField(n),n=jslet.data.createStringField("comment",20),n.label("Comment"),n.displayWidth(30),r.addField(n);var o=l.dsSaleDetail=new jslet.data.Dataset("dsSaleDetail");n=jslet.data.createNumberField("seqno"),n.label("Number"),o.addField(n),n=jslet.data.createStringField("product",10),n.label("Product"),o.addField(n),n=jslet.data.createNumberField("num",8),n.label("Num"),n.displayFormat("#,##0"),o.addField(n),n=jslet.data.createNumberField("price",10,2),n.label("Price"),n.displayFormat("#,##0.00"),o.addField(n),n=jslet.data.createNumberField("amount",10,2),n.label("Amount"),n.formula("[num]*[price]"),n.displayFormat("#,##0.00"),o.addField(n),n=jslet.data.createDatasetField("details",o),r.addField(n);var d=[{seqno:1,product:"P1",num:2e3,price:11.5},{seqno:2,product:"P2",num:1e3,price:11.5},{seqno:3,product:"P3",num:3e3,price:11.5},{seqno:4,product:"P4",num:5e3,price:11.5},{seqno:5,product:"P5",num:8e3,price:11.5}],u=[{seqno:1,product:"M1",num:1,price:10001},{seqno:2,product:"M2",num:2,price:3e4}],c=[{saleid:"200901001",saledate:new Date(2001,1,1),customer:"02",paymentterm:"02",details:d},{saleid:"200901002",saledate:new Date(2001,1,1),customer:"01",paymentterm:"01",details:u},{saleid:"200901003",saledate:new Date(2001,1,1),customer:"02",paymentterm:"02"}];r.dataList(c),e.exports=l}});