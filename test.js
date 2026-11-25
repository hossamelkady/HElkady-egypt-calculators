const assert=require('assert');const C=require('./www/logic.js');
let z=C.zakatMoney(500000,0,3000,true);assert.strictEqual(z.nisab,255000);assert.ok(z.due);assert.strictEqual(z.zakat,12500);
z=C.zakatMoney(200000,0,3000,true);assert.ok(!z.due);assert.strictEqual(z.zakat,0);
z=C.zakatMoney(500000,300000,3000,true);assert.ok(!z.due);
z=C.zakatMoney(500000,0,3000,false);assert.ok(!z.due);
let g=C.zakatGold(100,21,3000,true);assert.strictEqual(g.pureGrams,87.5);assert.ok(g.due);assert.strictEqual(g.zakat,6562.5);
g=C.zakatGold(50,24,3000,true);assert.ok(!g.due);
// electricity marginal: 50*.68 + 50*.87 + 100*1.06 = 34+43.5+106
assert.strictEqual(C.electricity(200),183.5);assert.strictEqual(C.electricity(0),0);assert.strictEqual(C.electricity(30),20.4);
assert.strictEqual(C.electricity(1100),C.electricity(1000)+100*2.89);
assert.strictEqual(C.electricity(300,null,'whole'),522);
assert.strictEqual(C.percentOf(15,200),30);assert.strictEqual(C.whatPercent(50,200),25);assert.strictEqual(C.pctChange(100,150),50);
assert.deepStrictEqual(C.discount(200,25),{off:50,final:150});
assert.deepStrictEqual(C.vat(100),{base:100,vat:14,total:114});assert.deepStrictEqual(C.vat(114,14,'included'),{base:100,vat:14,total:114});
assert.deepStrictEqual(C.loan(12000,10,12,'flat'),{monthly:1100,total:13200,interest:1200});
let l=C.loan(100000,12,12);assert.ok(Math.abs(l.monthly-8884.88)<0.01);assert.strictEqual(C.loan(1200,0,12).monthly,100);
assert.deepStrictEqual(C.bmi(70,175),{bmi:22.9,category:'وزن طبيعي'});
const a=C.ageBetween(new Date(1981,9,30),new Date(2026,10,25));assert.deepStrictEqual([a.years,a.months,a.days],[45,0,26]);
assert.deepStrictEqual(C.splitBill(400,4,10),{total:440,perPerson:110});
// reference cases computed by hand (marginal tiers, piasters: 68,87,106,174,218,235,289)
for(const [k,v] of [[50,34],[100,77.5],[200,183.5],[350,444.5],[650,1098.5],[1000,1921],[1100,2210]])assert.strictEqual(C.electricity(k),v,'kwh '+k);
assert.ok(C.zakatGold(85,24,3000,true).due);assert.ok(!C.zakatGold(84.9,24,3000,true).due);
assert.ok(C.zakatMoney(255000,0,3000,true).due);assert.ok(!C.zakatMoney(254999,0,3000,true).due);
assert.strictEqual(C.bmi(50,180).category,'نحافة');assert.strictEqual(C.bmi(90,175).category,'وزن زائد');assert.strictEqual(C.bmi(110,175).category,'سمنة');
assert.ok(Number.isNaN(C.whatPercent(5,0)));assert.strictEqual(C.loan(0,10,12),null);
console.log('calculator tests passed');
